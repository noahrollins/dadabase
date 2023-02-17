class KidSerializer < ActiveModel::Serializer
    attributes :id, :name, :nickname, :date_of_birth, :email, :zipcode, :spouse, :dads, :kids

    has_many :kid_dads_as_dad, foreign_key: :dad_id, class_name: 'KidDad'
    has_many :kids, through: :kid_dads_as_dad, source: :kid
  
    has_many :kid_dads_as_kid, foreign_key: :kid_id, class_name: 'KidDad'
    has_many :dads, through: :kid_dads_as_kid, source: :dad
  end

