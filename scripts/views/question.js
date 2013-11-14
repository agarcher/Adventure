App.Views.Question = Backbone.View.extend({
   tagName: 'li',
   className: 'question',
   template: _.template($("#question-template").html()),
 
   events: {
	   "click .voteup": "voteUp",
	   "click .votedown": "voteDown"
   },
   
   render: function() {
	   var data = this.model.toJSON();
	   data.tally = this.model.voteTally();
	   
       this.$el.html(this.template(data));
       return this;
   },
   
   voteUp: function() { this.setVote("up"); },
   voteDown: function() { this.setVote("down"); },
   setVote: function(voteType) {
      this.model.vote(App.currentUser.get('userName'), voteType);
      this.render();
   }
 
});