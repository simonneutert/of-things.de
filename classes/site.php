<?php

	class site {

		private $header;
		private $footer;
		private $scripts;

		public function addHeader($header) {

			$this->header = $header;

		}

		public function addFooter($footer) {

			$this->footer = $footer;

		}

		public function addScripts($scripts) {

			$this->scripts = $scripts;

		}

		public function display($content, $title) {

			global $page;

			include $this->header;
			include $this->scripts;

				$page->display($content);

			include $this->footer;

		}

	}

?>
