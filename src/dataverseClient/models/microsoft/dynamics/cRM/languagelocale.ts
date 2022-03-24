import {createKnowledgearticleFromDiscriminatorValue} from './createKnowledgearticleFromDiscriminatorValue';
import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {Crmbaseentity, Knowledgearticle, Organization} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Languagelocale extends Crmbaseentity implements Parsable {
    private __organizationid_value?: string | undefined;
    private _code?: string | undefined;
    private _knowledgearticle_languagelocaleid?: Knowledgearticle[] | undefined;
    private _language?: string | undefined;
    private _languagelocaleid?: string | undefined;
    private _localeid?: number | undefined;
    private _name?: string | undefined;
    private _organizationid?: Organization | undefined;
    private _region?: string | undefined;
    private _statecode?: number | undefined;
    private _statuscode?: number | undefined;
    private _versionnumber?: number | undefined;
    /**
     * Gets the _organizationid_value property value. 
     * @returns a string
     */
    public get _organizationid_value() {
        return this.__organizationid_value;
    };
    /**
     * Sets the _organizationid_value property value. 
     * @param value Value to set for the _organizationid_value property.
     */
    public set _organizationid_value(value: string | undefined) {
        this.__organizationid_value = value;
    };
    /**
     * Gets the code property value. 
     * @returns a string
     */
    public get code() {
        return this._code;
    };
    /**
     * Sets the code property value. 
     * @param value Value to set for the code property.
     */
    public set code(value: string | undefined) {
        this._code = value;
    };
    /**
     * Instantiates a new languagelocale and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_organizationid_value": (o, n) => { (o as unknown as Languagelocale)._organizationid_value = n.getStringValue(); },
            "code": (o, n) => { (o as unknown as Languagelocale).code = n.getStringValue(); },
            "knowledgearticle_languagelocaleid": (o, n) => { (o as unknown as Languagelocale).knowledgearticle_languagelocaleid = n.getCollectionOfObjectValues<Knowledgearticle>(createKnowledgearticleFromDiscriminatorValue); },
            "language": (o, n) => { (o as unknown as Languagelocale).language = n.getStringValue(); },
            "languagelocaleid": (o, n) => { (o as unknown as Languagelocale).languagelocaleid = n.getStringValue(); },
            "localeid": (o, n) => { (o as unknown as Languagelocale).localeid = n.getNumberValue(); },
            "name": (o, n) => { (o as unknown as Languagelocale).name = n.getStringValue(); },
            "organizationid": (o, n) => { (o as unknown as Languagelocale).organizationid = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "region": (o, n) => { (o as unknown as Languagelocale).region = n.getStringValue(); },
            "statecode": (o, n) => { (o as unknown as Languagelocale).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Languagelocale).statuscode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Languagelocale).versionnumber = n.getNumberValue(); },
        };
    };
    /**
     * Gets the knowledgearticle_languagelocaleid property value. 
     * @returns a knowledgearticle
     */
    public get knowledgearticle_languagelocaleid() {
        return this._knowledgearticle_languagelocaleid;
    };
    /**
     * Sets the knowledgearticle_languagelocaleid property value. 
     * @param value Value to set for the knowledgearticle_languagelocaleid property.
     */
    public set knowledgearticle_languagelocaleid(value: Knowledgearticle[] | undefined) {
        this._knowledgearticle_languagelocaleid = value;
    };
    /**
     * Gets the language property value. 
     * @returns a string
     */
    public get language() {
        return this._language;
    };
    /**
     * Sets the language property value. 
     * @param value Value to set for the language property.
     */
    public set language(value: string | undefined) {
        this._language = value;
    };
    /**
     * Gets the languagelocaleid property value. 
     * @returns a string
     */
    public get languagelocaleid() {
        return this._languagelocaleid;
    };
    /**
     * Sets the languagelocaleid property value. 
     * @param value Value to set for the languagelocaleid property.
     */
    public set languagelocaleid(value: string | undefined) {
        this._languagelocaleid = value;
    };
    /**
     * Gets the localeid property value. 
     * @returns a integer
     */
    public get localeid() {
        return this._localeid;
    };
    /**
     * Sets the localeid property value. 
     * @param value Value to set for the localeid property.
     */
    public set localeid(value: number | undefined) {
        this._localeid = value;
    };
    /**
     * Gets the name property value. 
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Sets the name property value. 
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        this._name = value;
    };
    /**
     * Gets the organizationid property value. 
     * @returns a organization
     */
    public get organizationid() {
        return this._organizationid;
    };
    /**
     * Sets the organizationid property value. 
     * @param value Value to set for the organizationid property.
     */
    public set organizationid(value: Organization | undefined) {
        this._organizationid = value;
    };
    /**
     * Gets the region property value. 
     * @returns a string
     */
    public get region() {
        return this._region;
    };
    /**
     * Sets the region property value. 
     * @param value Value to set for the region property.
     */
    public set region(value: string | undefined) {
        this._region = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("_organizationid_value", this._organizationid_value);
        writer.writeStringValue("code", this.code);
        writer.writeCollectionOfObjectValues<Knowledgearticle>("knowledgearticle_languagelocaleid", this.knowledgearticle_languagelocaleid);
        writer.writeStringValue("language", this.language);
        writer.writeStringValue("languagelocaleid", this.languagelocaleid);
        writer.writeNumberValue("localeid", this.localeid);
        writer.writeStringValue("name", this.name);
        writer.writeObjectValue<Organization>("organizationid", this.organizationid);
        writer.writeStringValue("region", this.region);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
        writer.writeNumberValue("versionnumber", this.versionnumber);
    };
    /**
     * Gets the statecode property value. 
     * @returns a integer
     */
    public get statecode() {
        return this._statecode;
    };
    /**
     * Sets the statecode property value. 
     * @param value Value to set for the statecode property.
     */
    public set statecode(value: number | undefined) {
        this._statecode = value;
    };
    /**
     * Gets the statuscode property value. 
     * @returns a integer
     */
    public get statuscode() {
        return this._statuscode;
    };
    /**
     * Sets the statuscode property value. 
     * @param value Value to set for the statuscode property.
     */
    public set statuscode(value: number | undefined) {
        this._statuscode = value;
    };
    /**
     * Gets the versionnumber property value. 
     * @returns a int64
     */
    public get versionnumber() {
        return this._versionnumber;
    };
    /**
     * Sets the versionnumber property value. 
     * @param value Value to set for the versionnumber property.
     */
    public set versionnumber(value: number | undefined) {
        this._versionnumber = value;
    };
}
