class KidDad < ApplicationRecord
    belongs_to :dad, class_name: "Person", foreign_key: :dad_id
    belongs_to :kid, class_name: "Person", foreign_key: :kid_id
  end