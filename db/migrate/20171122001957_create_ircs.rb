class CreateIrcs < ActiveRecord::Migration[5.1]
  def change
    create_table :ircs do |t|
      t.integer :user_id, null: false

      t.timestamps
    end

    add_index :ircs, :user_id
  end
end
