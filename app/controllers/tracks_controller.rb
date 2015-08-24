class TracksController < ApplicationController
    before_action :authenticate_user!

    def create

        params['track'][:user_id] = current_user.id
        @track = Track.new(track_params)


        respond_to do |format|
          if @track.save
            format.html {redirect_to root_path, notice: 'Track was successfully created.' }
          else
            format.html { render :profile }
          end
        end
    end

    def destroy
    end

    def track_params
      params.require(:track).permit(:artist, :title, :url, :user_id)
    end
end
