class Tag < ActiveRecord::Base
    has_many :tags_tracks
    has_many :tracks, through: :tags_tracks
end
