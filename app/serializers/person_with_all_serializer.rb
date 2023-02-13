class PersonWithAllSerializer < ActiveModel::Serializer
    attributes :id, :name, :nickname, :date_of_birth, :email, :zipcode, :spouse
    has_many :kids, foreign_key: :kid_id, class_name: "KidDad"
    has_many :dads, foreign_key: :dad_id, class_name: "KidDad"
    has_many :favorites
    has_many :pets
    has_many :person_moments
    has_many :moments, through: :person_moments
    has_many :comments
    has_many :reviews, foreign_key: :reviewer_id
    has_many :reviewed_by, through: :reviews, source: :reviewer
  end
  