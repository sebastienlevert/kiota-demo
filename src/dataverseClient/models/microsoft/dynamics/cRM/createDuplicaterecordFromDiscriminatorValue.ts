import {Duplicaterecord} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDuplicaterecordFromDiscriminatorValue(parseNode: ParseNode | undefined) : Duplicaterecord {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Duplicaterecord();
}
