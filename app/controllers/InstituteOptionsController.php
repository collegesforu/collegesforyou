<?php

class InstituteOptionsController extends \BaseController {

	/**
	 * Display a listing of instituteoptions
	 *
	 * @return Response
	 */
	public function index()
	{
		$instituteoptions = Instituteoption::all();

		return View::make('instituteoptions.index', compact('instituteoptions'));
	}

	/**
	 * Show the form for creating a new instituteoption
	 *
	 * @return Response
	 */
	public function create()
	{
		return View::make('instituteoptions.create');
	}

	/**
	 * Store a newly created instituteoption in storage.
	 *
	 * @return Response
	 */
	public function store()
	{
		$validator = Validator::make($data = Input::all(), Instituteoption::$rules);

		if ($validator->fails())
		{
			return Redirect::back()->withErrors($validator)->withInput();
		}

		Instituteoption::create($data);

		return Redirect::route('instituteoptions.index');
	}

	/**
	 * Display the specified instituteoption.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
		$instituteoption = Instituteoption::findOrFail($id);

		return View::make('instituteoptions.show', compact('instituteoption'));
	}

	/**
	 * Show the form for editing the specified instituteoption.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function edit($id)
	{
		$instituteoption = Instituteoption::find($id);

		return View::make('instituteoptions.edit', compact('instituteoption'));
	}

	/**
	 * Update the specified instituteoption in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update($id)
	{
		$instituteoption = Instituteoption::findOrFail($id);

		$validator = Validator::make($data = Input::all(), Instituteoption::$rules);

		if ($validator->fails())
		{
			return Redirect::back()->withErrors($validator)->withInput();
		}

		$instituteoption->update($data);

		return Redirect::route('instituteoptions.index');
	}

	/**
	 * Remove the specified instituteoption from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		Instituteoption::destroy($id);

		return Redirect::route('instituteoptions.index');
	}

}
