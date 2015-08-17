angular.module("Notes", []).controller("homeCtrl", ['$scope', function ($scope) {
    $scope.msg = "Welcome";

   

    $scope.selectGroup = function (group) {
        $scope.selectedGroup = group;
    };

    $scope.selectNote = function (note) {
        $scope.selectedNote = note;
    };

    $scope.addGroup = function () {
        var group = {
            name: "NewGroup",
            notes: []
        };

        console.log(JSON.stringify($scope.groups));

        $scope.groups.push(group);
        $scope.selectedGroup = group;
        $scope.save();
    };

    $scope.addNote = function () {
        var note = {
            name: "NewNote",
            text: ''
        };

        $scope.selectedGroup.notes.push(note);
        $scope.selectedNote = note;
        $scope.save();
    };

    $scope.deleteNote = function(index) {
        $scope.selectedGroup.notes.splice(index, 1);
        $scope.save()
    };

    $scope.deleteGroup = function(index) {
        $scope.groups.splice(index, 1);
        $scope.save();
    };

    $scope.isGroupActive = function (group) {
        return group == $scope.selectedGroup ? "active" : "";
    }

    $scope.isNoteActive = function (note) {
        return note == $scope.selectedNote ? "active" : "";
    }

    $scope.save = function() {
        localStorage.setItem('notes', JSON.stringify($scope.groups));
    }

    var storage = localStorage.getItem('notes');
    console.log(storage);

    if (storage == undefined) {
        $scope.groups = [
            {
                name: "My Group",
                notes: [
                    {
                        name: "My Note",
                        text: "This is my first note!",
                    }
                ]
            },
        ];
    }
    else {
        $scope.groups = JSON.parse(storage);
    }

    $scope.selectedGroup = $scope.groups[0];
    $scope.selectedNote = $scope.selectedGroup.notes[0];
    
}]);