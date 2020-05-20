struct FockSpace{S} <: HilbertSpace
    name::S
    function FockSpace(name::S) where S
        r = SymbolicUtils.@rule(*(~~x::has_destroy_create) => commute_bosonic(*, ~~x))
        (r ∈ COMMUTATOR_RULES.rules) || push!(COMMUTATOR_RULES.rules, r)
        new{S}(name)
    end
end
Base.:(==)(h1::T,h2::T) where T<:FockSpace = (h1.name==h2.name)

struct Destroy{H<:HilbertSpace,S,A} <: BasicOperator
    hilbert::H
    name::S
    aon::A
end
isdestroy(a) = false
isdestroy(a::SymbolicUtils.Term{T}) where {T<:Destroy} = true

struct Create{H<:HilbertSpace,S,A} <: BasicOperator
    hilbert::H
    name::S
    aon::A
end
iscreate(a) = false
iscreate(a::SymbolicUtils.Term{T}) where {T<:Create} = true

for f in [:Destroy,:Create]
    @eval $(f)(hilbert::H,name::S,aon::A) where {H,S,A} = $(f){H,S,A}(hilbert,name,aon)
    @eval $(f)(hilbert::FockSpace,name) = $(f)(hilbert,name,1)
    @eval function $(f)(hilbert::ProductSpace,name)
        i = findall(x->isa(x,FockSpace),hilbert.spaces)
        if length(i)==1
            return $(f)(hilbert,name,i[1])
        else
            isempty(i) && error("Can only create $($(f)) on FockSpace! Not included in $(hilbert)")
            length(i)>1 && error("More than one FockSpace in $(hilbert)! Specify on which Hilbert space $($(f)) should be created with $($(f))(hilbert,name,i)!")
        end
    end
    @eval function embed(h::ProductSpace,op::T,aon::Int) where T<:($(f))
        check_hilbert(h.spaces[aon],op.hilbert)
        op_ = $(f)(h,op.name,aon)
        return op_
    end
    @eval function _to_symbolic(op::T) where T<:($(f))
        sym = SymbolicUtils.term($(f), op.hilbert, op.name, acts_on(op); type=$(f))
        return sym
    end
end

Base.adjoint(op::Destroy) = Create(op.hilbert,op.name,acts_on(op))
Base.adjoint(op::Create) = Destroy(op.hilbert,op.name,acts_on(op))

# Commutation relation in simplification
function has_destroy_create(args)
    length(args) <= 1 && return false
    for i=1:length(args)-1
        if isdestroy(args[i])&&iscreate(args[i+1])&&(acts_on(args[i])==acts_on(args[i+1]))
            return true
        end
    end
    return false
end
function commute_bosonic(f,args)
    commuted_args = []
    i = 1
    while i <= length(args)
        if isdestroy(args[i]) && i<length(args) && iscreate(args[i+1]) && (acts_on(args[i])==acts_on(args[i+1]))
            push!(commuted_args, args[i+1]*args[i] + 1)
            i += 2
        else
            push!(commuted_args, args[i])
            i += 1
        end
    end
    return f(commuted_args...)
end
