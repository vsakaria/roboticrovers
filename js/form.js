$(function() {

	var id = 1;

	var form = '<form class="rover"><h2>Create a Rover</h2>Select an X value: <input type="text" name="x"><br>Select an Y value: <input type="text" name="y">Select a compass value: <select id="roverCompass" name="compass"><option value="N">N</option><option value="S">S</option><option value="E">E</option><option value="W">W</option></select></br>Give the rover directions: <input type="text" name="directions"><br><input id="roverbutton" type="submit" value="Explore"></form>';

		$('#main_container').append(form);
		$('#main_container').append(form);

		$('form.rover').each(	function(){
			$(this).data('rover', id);
			id++;
		});
});


	