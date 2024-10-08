class CreateTodos < ActiveRecord::Migration[7.1]
  def change
    create_table :todos do |t|
      t.string :task, null: false
      t.boolean :is_completed, default: false, null: false

      t.timestamps
    end
  end
end