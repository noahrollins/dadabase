class MomentWithPeopleSerializer < ActiveModel::Serializer
    attributes :id, :description, :image_url
    has_many :person_moments
    has_many :persons, through: :person_moments
  end
  