<?php

class InstitutesController extends \BaseController {

	/**
	 * Display a listing of institutes
	 *
	 * @return Response
	 */
	public function index()
	{
		$institutes = Institute::all();

		return View::make('institutes.index', compact('institutes'));
	}

	/**
	 * Show the form for creating a new institute
	 *
	 * @return Response
	 */
	public function create()
	{
		return View::make('institutes.create');
	}

	/**
	 * Store a newly created institute in storage.
	 *
	 * @return Response
	 */
	public function store()
	{
		$validator = Validator::make($data = Input::all(), Institute::$rules);

		if ($validator->fails())
		{
			return Redirect::back()->withErrors($validator)->withInput();
		}

		Institute::create($data);

		return Redirect::route('institutes.index');
	}

	/**
	 * Display the specified institute.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
		$institute = Institute::findOrFail($id);

		return View::make('institutes.show', compact('institute'));
	}

	/**
	 * Show the form for editing the specified institute.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function edit($id)
	{
		$institute = Institute::find($id);

		return View::make('institutes.edit', compact('institute'));
	}

	/**
	 * Update the specified institute in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update($id)
	{
		$institute = Institute::findOrFail($id);

		$validator = Validator::make($data = Input::all(), Institute::$rules);

		if ($validator->fails())
		{
			return Redirect::back()->withErrors($validator)->withInput();
		}

		$institute->update($data);

		return Redirect::route('institutes.index');
	}

	/**
	 * Remove the specified institute from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		Institute::destroy($id);

		return Redirect::route('institutes.index');
	}

}
