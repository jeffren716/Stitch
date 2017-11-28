class Channel < ApplicationRecord
  validates :name, presence: true, uniqueness: true

  # has_many :users,
  # primary_key: :id,
  # foreign_key: :channel_id,
  # class_name: :User,
  # validate: false

  def self.top_five_results(query_params)
    param = '%' + query_params.downcase + '%'
    Channel.where('lower(name) LIKE ?', param).limit(5)
  end

end
