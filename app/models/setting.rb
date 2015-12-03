class Setting < ActiveRecord::Base
	belongs_to :user
	# after_initialize :defaults

 #    def defaults
	# 	self.frames ||= 1 
	# 	self.style ||= 1
	# 	self.skin ||= white
	# 	self.background ||= white
 #    end
end
