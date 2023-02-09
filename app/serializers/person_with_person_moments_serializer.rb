class PersonWithPersonMomentsSerializer < ActiveModel::Serializer
    attributes :id, :name, :nickname, :date_of_birth, :email, :zipcode, :spouse
    has_many :person_moments
    has_many :moments, through: :person_moments
  end
  