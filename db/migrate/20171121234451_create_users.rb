class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false

      t.timestamps
    end

    add_column :users, :profile_picture, :string, null: false, default: "https://thenib.imgix.net/usq/1d97429f-4a64-4d52-bfdb-c36172c05228/this-is-not-fine-001-dae9d5.png"
    add_column :users, :stream_url, :string, null: false, default: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    add_column :users, :channel_id, :integer, default: 7
    add_column :users, :stream_title, :string, default: 'Check out my stream!'
    add_index :users, :username, unique: true
    add_index :users, :session_token, unique: true
    add_index :users, :channel_id
  end
end
