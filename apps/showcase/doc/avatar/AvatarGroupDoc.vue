<template>
    <DocSectionText v-bind="$attrs">
        <p>Grouping is available by wrapping multiple Avatar components inside an AvatarGroup.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <AvatarGroup>
            <Avatar image="https://khulnasoft.com/cdn/khulnasoft/images/avatar/amyelsner.png" shape="circle" />
            <Avatar image="https://khulnasoft.com/cdn/khulnasoft/images/avatar/asiyajavayant.png" shape="circle" />
            <Avatar image="https://khulnasoft.com/cdn/khulnasoft/images/avatar/onyamalimba.png" shape="circle" />
            <Avatar image="https://khulnasoft.com/cdn/khulnasoft/images/avatar/ionibowcher.png" shape="circle" />
            <Avatar image="https://khulnasoft.com/cdn/khulnasoft/images/avatar/xuxuefeng.png" shape="circle" />
            <Avatar label="+2" shape="circle" />
        </AvatarGroup>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<AvatarGroup>
    <Avatar image="/images/avatar/amyelsner.png" shape="circle" />
    <Avatar image="/images/avatar/asiyajavayant.png" shape="circle" />
    <Avatar image="/images/avatar/onyamalimba.png" shape="circle" />
    <Avatar image="/images/avatar/ionibowcher.png" shape="circle" />
    <Avatar image="/images/avatar/xuxuefeng.png" shape="circle" />
    <Avatar label="+2" shape="circle" />
</AvatarGroup>
`,
                options: `
<template>
    <div class="card flex justify-center">
        <AvatarGroup>
            <Avatar image="https://khulnasoft.com/cdn/khulnasoft/images/avatar/amyelsner.png" shape="circle" />
            <Avatar image="https://khulnasoft.com/cdn/khulnasoft/images/avatar/asiyajavayant.png" shape="circle" />
            <Avatar image="https://khulnasoft.com/cdn/khulnasoft/images/avatar/onyamalimba.png" shape="circle" />
            <Avatar image="https://khulnasoft.com/cdn/khulnasoft/images/avatar/ionibowcher.png" shape="circle" />
            <Avatar image="https://khulnasoft.com/cdn/khulnasoft/images/avatar/xuxuefeng.png" shape="circle" />
            <Avatar label="+2" shape="circle" />
        </AvatarGroup>
    </div>
</template>

<script>

<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-center">
        <AvatarGroup>
            <Avatar image="https://khulnasoft.com/cdn/khulnasoft/images/avatar/amyelsner.png" shape="circle" />
            <Avatar image="https://khulnasoft.com/cdn/khulnasoft/images/avatar/asiyajavayant.png" shape="circle" />
            <Avatar image="https://khulnasoft.com/cdn/khulnasoft/images/avatar/onyamalimba.png" shape="circle" />
            <Avatar image="https://khulnasoft.com/cdn/khulnasoft/images/avatar/ionibowcher.png" shape="circle" />
            <Avatar image="https://khulnasoft.com/cdn/khulnasoft/images/avatar/xuxuefeng.png" shape="circle" />
            <Avatar label="+2" shape="circle" />
        </AvatarGroup>
    </div>
</template>

<script setup>

<\/script>
`
            }
        };
    }
};
</script>
