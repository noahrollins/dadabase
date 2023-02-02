class PetSerializer < ActiveModel::Serializer
  attributes :id, :name, :animal, :image_url, :date_of_birth
end
