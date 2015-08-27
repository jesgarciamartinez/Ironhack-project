class Track < ActiveRecord::Base
    belongs_to :user
    has_many :tags_tracks
    has_many :tags, through: :tags_tracks
end
