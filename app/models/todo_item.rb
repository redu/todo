class TodoItem < ActiveRecord::Base
  belongs_to :project
end
