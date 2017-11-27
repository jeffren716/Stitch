class CreateChannels < ActiveRecord::Migration[5.1]
  def change
    create_table :channels do |t|
      t.string :name, null: false

      t.timestamps
    end
    add_index :channels, :name, unique: true
    add_column :channels, :pic_url, :string, null: false, default: "https://thenib.imgix.net/usq/1d97429f-4a64-4d52-bfdb-c36172c05228/this-is-not-fine-001-dae9d5.png"
  end
end
