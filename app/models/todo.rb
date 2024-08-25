class Todo < ApplicationRecord
  validates :task, presence: true, length: { maximum: 30 }
end