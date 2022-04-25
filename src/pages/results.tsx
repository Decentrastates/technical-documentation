import * as React from 'react'
import 'decentraland-ui/dist/themes/base-theme.css'
import 'decentraland-ui/dist/themes/alternative/light-theme.css'
import GeneralLayout from '@components/GeneralLayout'
import WelcomeScreen from '@components/WelcomeScreen'
import * as queryString from "query-string";
import { InstantSearch, Hits, SearchBox } from 'react-instantsearch-dom';
import algoliasearch from 'algoliasearch/lite';

const searchClient = algoliasearch('ZBR370BA1A', '90d39c58d1ec20ab5f315750f7894b8b');


export default function ResultsPage({location}) {

  const { search } = queryString.parse(location.search);

  const SearchTitle = () => {
    return (
      <h2>{search ? `Search results for "${search}"` : "No query was provided"}</h2>
    )
  }

  return (
    <GeneralLayout>
      <SearchTitle />
      <InstantSearch searchClient={searchClient} indexName="DCL_DOCS" searchState={{query: search}}>
        <SearchBox />
        <Hits />
      </InstantSearch>
    </GeneralLayout>
  )
}
