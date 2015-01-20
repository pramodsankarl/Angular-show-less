Show More/Less directive
===========
###Introduction###
Based on my answer earlier in [stack overflow](http://stackoverflow.com/questions/28054982/how-to-show-hide-an-element-based-on-its-height-using-angular#answer-28056154) for an interesting question. 
Creating a branch to update and play around with this directive.

###Usage###

    <moreless options="{height:300}">
      <p ng-bind="mynotes2" ng-class="{'showMore': more, 'showLess': !more}"></p>
    </moreless>

###RoadMap###
- Support updating show/less on resizes, add debounced logic to handle debounce.
- Add more configuration like adding css class etc.
- Add more/less funciton binding.
- Add more functionality.
- Add more tests

**[Demo Plunker](http://plnkr.co/edit/omD9to?p=preview)**