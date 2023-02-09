class PersonWithDadsSerializer < ActiveModel::Serializer
    attributes :id, :name, :nickname, :date_of_birth, :email, :zipcode, :spouse
    has_many :dads, foreign_key: :dad_id, class_name: "KidDad"
  end