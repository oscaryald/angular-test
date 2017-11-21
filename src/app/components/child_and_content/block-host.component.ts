import { Component, ViewChildren, QueryList } from '@angular/core';
import { BlockComponent } from './block.component';

@Component({
    moduleId: module.id,
    templateUrl: "block-host.component.html"
})

export class BlockHostComponent {
    @ViewChildren(BlockComponent)
    blocks: QueryList<BlockComponent>;

    showBlock() {
        this.blocks.forEach(x => x.show());
    }

}

