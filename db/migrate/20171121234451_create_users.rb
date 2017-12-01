class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.integer :channel_id

      t.timestamps
    end

    add_column :users, :profile_picture, :string, null: false, default: "https://cnet3.cbsistatic.com/img/hA56wVzzfGGZCrKODgOOnGVNQeM=/fit-in/970x0/2017/03/07/59b2d834-1c6f-4bea-811a-96f833f11751/corgioriginal.jpg"
    add_column :users, :stream_url, :string, null: false, default: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    add_column :users, :stream_title, :string, default: 'Check out my stream!'
    add_index :users, :username, unique: true
    add_index :users, :session_token, unique: true
    add_index :users, :channel_id
  end
end
