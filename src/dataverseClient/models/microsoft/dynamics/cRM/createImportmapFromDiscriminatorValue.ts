import {Importmap} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createImportmapFromDiscriminatorValue(parseNode: ParseNode | undefined) : Importmap {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Importmap();
}
