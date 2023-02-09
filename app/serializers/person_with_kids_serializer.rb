class PersonWithKidsSerializer < ActiveModel::Serializer
    attributes :id, :name, :nickname, :date_of_birth, :email, :zipcode, :spouse
    has_many :kids, foreign_key: :kid_id, class_name: "KidDad"
  end
  