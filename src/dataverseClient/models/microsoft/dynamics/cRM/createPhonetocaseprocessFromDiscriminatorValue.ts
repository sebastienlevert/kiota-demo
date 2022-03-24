import {Phonetocaseprocess} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPhonetocaseprocessFromDiscriminatorValue(parseNode: ParseNode | undefined) : Phonetocaseprocess {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Phonetocaseprocess();
}
