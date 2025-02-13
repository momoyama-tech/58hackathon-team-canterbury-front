import adapter from '@sveltejs/adapter-static';
const production = process.env.NODE_ENV === 'production';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			fallback: 'index.html' // すべてのリクエストを index.html にフォールバック
		}),
		paths: {
            base: production ? '/58hackathon-team-canterbury-front' : '',
        }
	}
};

export default config;
