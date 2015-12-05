class Setting < ActiveRecord::Base
	belongs_to :user
	before_update :check_for_http

	def check_for_http
		if self.website1.match(/https?:\/\//) == nil
			self.website1 = "http://" + self.website1
		end

		if self.website2.match(/https?:\/\//) == nil
			self.website2 = "http://" + self.website2
		end

		if self.website3.match(/https?:\/\//) == nil
			self.website3 = "http://" + self.website3
		end

		if self.website4.match(/https?:\/\//) == nil
			self.website4 = "http://" + self.website4
		end		
	end

end
