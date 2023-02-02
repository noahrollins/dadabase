class FavoriteSerializer < ActiveModel::Serializer
  attributes :id, :sports, :artists, :activities, :subjects
end
