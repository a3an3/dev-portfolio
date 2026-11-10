<script lang="ts">

	import { Button, SectionHeadline } from '$lib/components';

	let contactName = $state('');
	let contactMail = $state('');
	let contactText = $state('');
	let isFormInvalid = $state(false);
	let isEmailSent = $state(false);
	let showErrorMessage = $state(false);
	let isLoading = $state(false);

	async function onSubmit(event: Event) {
		event.preventDefault();

		if (contactName && contactMail && contactText) {
			isLoading = true;
			const response = await fetch('/api/send-mail', {
				method: 'POST',
				body: JSON.stringify({
						contactName, contactMail, contactText
					}
				),
				headers: { 'Content-Type': 'application/json' }
			});
			isLoading = false;
			if (response.ok) {
				isEmailSent = true;
			} else {
				showErrorMessage = true;
			}
		} else {
			isFormInvalid = true;
		}
	}

	$effect(() => {
		if (contactName || contactMail || contactText || !contactName || !contactMail || !contactText) {
			isFormInvalid = false;
		}
	});
</script>

<section class="mt-l">
	<SectionHeadline sectionName="contact-form">Let's talk</SectionHeadline>
	<div class="form-container default-margin mt-m">
		{#if isEmailSent}
			<div class="from-style">
				<h3>Thank you for getting in contact with me.</h3>
				<h3>I'll usually reply within 48 hours.</h3>
			</div>
		{:else if isLoading}
			<div class="spinner-container">
				<div class="spinner"></div>
				<h3>Sending the contact form</h3>
			</div>
		{:else if showErrorMessage}
			<h3>We seem to have trouble with our server at the moment.
				Please send me an email directly to <a class="link" href="mailto:setka.adrian@gmail.com">me</a>
			</h3>
		{:else}
			<form class="from-style">
				<input class='text-input mb-m'
							 class:input-error={isFormInvalid && !Boolean(contactName.length)}
							 placeholder="Your Name" bind:value={contactName} />
				<input class="text-input mb-m" class:input-error={isFormInvalid && !Boolean(contactMail.length)}
							 placeholder="Your Email" bind:value={contactMail} />
				<textarea class:input-error={isFormInvalid && !Boolean(contactText.length)}
									placeholder="Tell me about the role or project" bind:value={contactText}></textarea>
				<Button onclick={onSubmit}>Submit</Button>
			</form>
		{/if}
		<div class="form-text">
			<h3 class="semi-bold mb-s">Hiring or building something?</h3>
			<p>
				I'm open to full-stack roles, fully remote within the EU or Germany, or hybrid in Berlin or Valencia. I'm
				based in Berlin (CET) and available at short notice. Send me a few lines about the team and the product, and
				I'll get back to you.
			</p>
		</div>
	</div>
</section>

<style>
    section {
        padding-bottom: 140px;
    }

    .form-container {
        display: flex;
        justify-content: space-between;
    }

    .form-text {
        width: 39%;
    }

    .from-style {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 45%;
    }

    form * {
        font-size: 20px;
        font-family: 'Inter Tight', sans-serif;
        font-weight: 500;
        color: black;
    }

    textarea, input {
        width: 100%;
        background-color: rgba(0, 0, 0, 0.055);
        border-radius: 8px;
        padding: 4px 12px;
        outline: none;
        border: 1px solid transparent;
    }


    input {
        height: 48px;
    }

    textarea {
        height: 180px;
        margin-bottom: 30px;
    }

    textarea::placeholder,
    input::placeholder {
        font-size: 20px;
        font-weight: 400;
    }

    .input-error {
        border: 1px solid rgba(223, 87, 87, 0.7);
    }

    .spinner {
        border: 4px solid rgba(0, 0, 0, 0.1);
        border-left-color: black;
        border-radius: 50%;
        width: 16px;
        height: 16px;
        display: inline-block;
        margin-right: 8px;
        animation: spin 1s linear infinite;
    }

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    .spinner-container {
        display: flex;
    }
</style>