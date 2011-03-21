class CreateTodoItems < ActiveRecord::Migration
  def self.up
    create_table :todo_items do |t|
      t.text :content
      t.integer :position
      t.string :state
      t.references :project

      t.timestamps
    end
  end

  def self.down
    drop_table :todo_items
  end
end
