class Moment < ApplicationRecord
    belongs_to :dad, class_name: 'Person'
    has_many :comments
end
