class Review < ApplicationRecord
    belongs_to :reviewer, class_name: "Person"
    belongs_to :reviewed, class_name: "Person"

    validates :content, presence: true
  end