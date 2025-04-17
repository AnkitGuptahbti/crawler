const { algoliasearch, instantsearch } = window;

const searchClient = algoliasearch(
  'BHD14FEUXP',
  'f6beba43af7cf22d51f91a2eb07af2f1'
);

const search = instantsearch({
  indexName: 'sample1',
  searchClient,
  future: { preserveSharedStateOnUnmount: true },
});

search.addWidgets([
  instantsearch.widgets.searchBox({
    container: '#searchbox',
  }),
  instantsearch.widgets.hits({
    container: '#hits',
    templates: {
      item: (hit, { html, components }) => html`
        <article>
          <img src=${hit.objectID} alt=${hit.fruit} />
          <div>
            <h1>${components.Highlight({ hit, attribute: 'fruit' })}</h1>
            <p>${components.Highlight({ hit, attribute: 'size' })}</p>
            <p>${components.Highlight({ hit, attribute: 'color' })}</p>
          </div>
        </article>
      `,
    },
  }),
  instantsearch.widgets.configure({
    hitsPerPage: 8,
  }),
  instantsearch.widgets.pagination({
    container: '#pagination',
  }),
]);

search.start();
