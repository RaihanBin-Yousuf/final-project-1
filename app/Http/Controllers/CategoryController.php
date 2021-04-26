<?php

namespace App\Http\Controllers;
use App\Traits\CommonTrait;
use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    use CommonTrait;
    public function __construct(Category $category,Product $product)
    {
     $this->category = $category;
     $this->product = $product;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $categories = Category::orderBy('id','ASC')->get();
        $product=$this->product->getAll();
        

        if (request()->ajax()) {
            $input=request()->product_id;
            
            $categories = $this->category->getAll($input);
            // if(request()->dropdown) {
                return $this->sendResponse(['data'=>$categories]);
            // }
            // return $this->sendResponse(['data'=>$categories, 'pages' => [
            //     'total'=> $categories->total(),
            //     'next_page_url' => $categories->nextPageUrl(),
            //     'prev_page_url' => $categories->previousPageUrl(),
            //     'last_page' 	=> $categories->lastPage(),
            //     'current_page' 	=> $categories->currentPage(),
            // ]]);
        }
        return view('backend.product.category',compact('categories','product'));
        // return view('backend.product.new');
    }
    
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $input = $request->all();
        $category = $this->category->saveCategory($input);
        return $this->index();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function show(Category $category)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function edit(Category $category)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Category $category)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function destroy(Category $category)
    {
        //
    }
}
