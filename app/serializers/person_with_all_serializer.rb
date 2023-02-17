class PersonWithAllSerializer < ActiveModel::Serializer
    attributes :id, :name, :nickname, :date_of_birth, :email, :zipcode, :spouse, :dads, :kids

    has_many :favorites
    has_many :pets
    has_many :person_moments
    has_many :moments, through: :person_moments
    has_many :comments
    has_many :reviews, foreign_key: :reviewer_id
    has_many :reviewed_by, through: :reviews, source: :reviewer

    has_many :dads, serializer: PersonSerializer
    has_many :kids, serializer: PersonSerializer

end 

