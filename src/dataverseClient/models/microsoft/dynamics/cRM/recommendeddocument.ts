import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTransactioncurrencyFromDiscriminatorValue} from './createTransactioncurrencyFromDiscriminatorValue';
import {Crmbaseentity, Organization, Systemuser, Transactioncurrency} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Recommendeddocument extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __organizationid_value?: string | undefined;
    private __regardingobjectid_value?: string | undefined;
    private __transactioncurrencyid_value?: string | undefined;
    private _absoluteurl?: string | undefined;
    private _associatedrecordname?: string | undefined;
    private _author?: string | undefined;
    private _contenttype?: string | undefined;
    private _createdbyname?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfbyname?: Systemuser | undefined;
    private _editurl?: string | undefined;
    private _exchangerate?: number | undefined;
    private _externaldocumentid?: string | undefined;
    private _externalmodifiedby?: string | undefined;
    private _filesize?: number | undefined;
    private _filetype?: string | undefined;
    private _fullname?: string | undefined;
    private _iconclassname?: string | undefined;
    private _location?: string | undefined;
    private _modifiedbyname?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfbyname?: Systemuser | undefined;
    private _organizationid?: Organization | undefined;
    private _readurl?: string | undefined;
    private _recommendeddocumentid?: string | undefined;
    private _source?: string | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _title?: string | undefined;
    private _transactioncurrencyidname?: Transactioncurrency | undefined;
    private _utcconversiontimezonecode?: number | undefined;
    private _version?: string | undefined;
    private _versionnumber?: number | undefined;
    /**
     * Gets the _createdby_value property value. 
     * @returns a string
     */
    public get _createdby_value() {
        return this.__createdby_value;
    };
    /**
     * Sets the _createdby_value property value. 
     * @param value Value to set for the _createdby_value property.
     */
    public set _createdby_value(value: string | undefined) {
        this.__createdby_value = value;
    };
    /**
     * Gets the _createdonbehalfby_value property value. 
     * @returns a string
     */
    public get _createdonbehalfby_value() {
        return this.__createdonbehalfby_value;
    };
    /**
     * Sets the _createdonbehalfby_value property value. 
     * @param value Value to set for the _createdonbehalfby_value property.
     */
    public set _createdonbehalfby_value(value: string | undefined) {
        this.__createdonbehalfby_value = value;
    };
    /**
     * Gets the _modifiedby_value property value. 
     * @returns a string
     */
    public get _modifiedby_value() {
        return this.__modifiedby_value;
    };
    /**
     * Sets the _modifiedby_value property value. 
     * @param value Value to set for the _modifiedby_value property.
     */
    public set _modifiedby_value(value: string | undefined) {
        this.__modifiedby_value = value;
    };
    /**
     * Gets the _modifiedonbehalfby_value property value. 
     * @returns a string
     */
    public get _modifiedonbehalfby_value() {
        return this.__modifiedonbehalfby_value;
    };
    /**
     * Sets the _modifiedonbehalfby_value property value. 
     * @param value Value to set for the _modifiedonbehalfby_value property.
     */
    public set _modifiedonbehalfby_value(value: string | undefined) {
        this.__modifiedonbehalfby_value = value;
    };
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
     * Gets the _regardingobjectid_value property value. 
     * @returns a string
     */
    public get _regardingobjectid_value() {
        return this.__regardingobjectid_value;
    };
    /**
     * Sets the _regardingobjectid_value property value. 
     * @param value Value to set for the _regardingobjectid_value property.
     */
    public set _regardingobjectid_value(value: string | undefined) {
        this.__regardingobjectid_value = value;
    };
    /**
     * Gets the _transactioncurrencyid_value property value. 
     * @returns a string
     */
    public get _transactioncurrencyid_value() {
        return this.__transactioncurrencyid_value;
    };
    /**
     * Sets the _transactioncurrencyid_value property value. 
     * @param value Value to set for the _transactioncurrencyid_value property.
     */
    public set _transactioncurrencyid_value(value: string | undefined) {
        this.__transactioncurrencyid_value = value;
    };
    /**
     * Gets the absoluteurl property value. 
     * @returns a string
     */
    public get absoluteurl() {
        return this._absoluteurl;
    };
    /**
     * Sets the absoluteurl property value. 
     * @param value Value to set for the absoluteurl property.
     */
    public set absoluteurl(value: string | undefined) {
        this._absoluteurl = value;
    };
    /**
     * Gets the associatedrecordname property value. 
     * @returns a string
     */
    public get associatedrecordname() {
        return this._associatedrecordname;
    };
    /**
     * Sets the associatedrecordname property value. 
     * @param value Value to set for the associatedrecordname property.
     */
    public set associatedrecordname(value: string | undefined) {
        this._associatedrecordname = value;
    };
    /**
     * Gets the author property value. 
     * @returns a string
     */
    public get author() {
        return this._author;
    };
    /**
     * Sets the author property value. 
     * @param value Value to set for the author property.
     */
    public set author(value: string | undefined) {
        this._author = value;
    };
    /**
     * Instantiates a new recommendeddocument and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the contenttype property value. 
     * @returns a string
     */
    public get contenttype() {
        return this._contenttype;
    };
    /**
     * Sets the contenttype property value. 
     * @param value Value to set for the contenttype property.
     */
    public set contenttype(value: string | undefined) {
        this._contenttype = value;
    };
    /**
     * Gets the createdbyname property value. 
     * @returns a systemuser
     */
    public get createdbyname() {
        return this._createdbyname;
    };
    /**
     * Sets the createdbyname property value. 
     * @param value Value to set for the createdbyname property.
     */
    public set createdbyname(value: Systemuser | undefined) {
        this._createdbyname = value;
    };
    /**
     * Gets the createdon property value. 
     * @returns a Date
     */
    public get createdon() {
        return this._createdon;
    };
    /**
     * Sets the createdon property value. 
     * @param value Value to set for the createdon property.
     */
    public set createdon(value: Date | undefined) {
        this._createdon = value;
    };
    /**
     * Gets the createdonbehalfbyname property value. 
     * @returns a systemuser
     */
    public get createdonbehalfbyname() {
        return this._createdonbehalfbyname;
    };
    /**
     * Sets the createdonbehalfbyname property value. 
     * @param value Value to set for the createdonbehalfbyname property.
     */
    public set createdonbehalfbyname(value: Systemuser | undefined) {
        this._createdonbehalfbyname = value;
    };
    /**
     * Gets the editurl property value. 
     * @returns a string
     */
    public get editurl() {
        return this._editurl;
    };
    /**
     * Sets the editurl property value. 
     * @param value Value to set for the editurl property.
     */
    public set editurl(value: string | undefined) {
        this._editurl = value;
    };
    /**
     * Gets the exchangerate property value. 
     * @returns a int64
     */
    public get exchangerate() {
        return this._exchangerate;
    };
    /**
     * Sets the exchangerate property value. 
     * @param value Value to set for the exchangerate property.
     */
    public set exchangerate(value: number | undefined) {
        this._exchangerate = value;
    };
    /**
     * Gets the externaldocumentid property value. 
     * @returns a string
     */
    public get externaldocumentid() {
        return this._externaldocumentid;
    };
    /**
     * Sets the externaldocumentid property value. 
     * @param value Value to set for the externaldocumentid property.
     */
    public set externaldocumentid(value: string | undefined) {
        this._externaldocumentid = value;
    };
    /**
     * Gets the externalmodifiedby property value. 
     * @returns a string
     */
    public get externalmodifiedby() {
        return this._externalmodifiedby;
    };
    /**
     * Sets the externalmodifiedby property value. 
     * @param value Value to set for the externalmodifiedby property.
     */
    public set externalmodifiedby(value: string | undefined) {
        this._externalmodifiedby = value;
    };
    /**
     * Gets the filesize property value. 
     * @returns a integer
     */
    public get filesize() {
        return this._filesize;
    };
    /**
     * Sets the filesize property value. 
     * @param value Value to set for the filesize property.
     */
    public set filesize(value: number | undefined) {
        this._filesize = value;
    };
    /**
     * Gets the filetype property value. 
     * @returns a string
     */
    public get filetype() {
        return this._filetype;
    };
    /**
     * Sets the filetype property value. 
     * @param value Value to set for the filetype property.
     */
    public set filetype(value: string | undefined) {
        this._filetype = value;
    };
    /**
     * Gets the fullname property value. 
     * @returns a string
     */
    public get fullname() {
        return this._fullname;
    };
    /**
     * Sets the fullname property value. 
     * @param value Value to set for the fullname property.
     */
    public set fullname(value: string | undefined) {
        this._fullname = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Recommendeddocument)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Recommendeddocument)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Recommendeddocument)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Recommendeddocument)._modifiedonbehalfby_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Recommendeddocument)._organizationid_value = n.getStringValue(); },
            "_regardingobjectid_value": (o, n) => { (o as unknown as Recommendeddocument)._regardingobjectid_value = n.getStringValue(); },
            "_transactioncurrencyid_value": (o, n) => { (o as unknown as Recommendeddocument)._transactioncurrencyid_value = n.getStringValue(); },
            "absoluteurl": (o, n) => { (o as unknown as Recommendeddocument).absoluteurl = n.getStringValue(); },
            "associatedrecordname": (o, n) => { (o as unknown as Recommendeddocument).associatedrecordname = n.getStringValue(); },
            "author": (o, n) => { (o as unknown as Recommendeddocument).author = n.getStringValue(); },
            "contenttype": (o, n) => { (o as unknown as Recommendeddocument).contenttype = n.getStringValue(); },
            "createdbyname": (o, n) => { (o as unknown as Recommendeddocument).createdbyname = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Recommendeddocument).createdon = n.getDateValue(); },
            "createdonbehalfbyname": (o, n) => { (o as unknown as Recommendeddocument).createdonbehalfbyname = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "editurl": (o, n) => { (o as unknown as Recommendeddocument).editurl = n.getStringValue(); },
            "exchangerate": (o, n) => { (o as unknown as Recommendeddocument).exchangerate = n.getNumberValue(); },
            "externaldocumentid": (o, n) => { (o as unknown as Recommendeddocument).externaldocumentid = n.getStringValue(); },
            "externalmodifiedby": (o, n) => { (o as unknown as Recommendeddocument).externalmodifiedby = n.getStringValue(); },
            "filesize": (o, n) => { (o as unknown as Recommendeddocument).filesize = n.getNumberValue(); },
            "filetype": (o, n) => { (o as unknown as Recommendeddocument).filetype = n.getStringValue(); },
            "fullname": (o, n) => { (o as unknown as Recommendeddocument).fullname = n.getStringValue(); },
            "iconclassname": (o, n) => { (o as unknown as Recommendeddocument).iconclassname = n.getStringValue(); },
            "location": (o, n) => { (o as unknown as Recommendeddocument).location = n.getStringValue(); },
            "modifiedbyname": (o, n) => { (o as unknown as Recommendeddocument).modifiedbyname = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Recommendeddocument).modifiedon = n.getDateValue(); },
            "modifiedonbehalfbyname": (o, n) => { (o as unknown as Recommendeddocument).modifiedonbehalfbyname = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "organizationid": (o, n) => { (o as unknown as Recommendeddocument).organizationid = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "readurl": (o, n) => { (o as unknown as Recommendeddocument).readurl = n.getStringValue(); },
            "recommendeddocumentid": (o, n) => { (o as unknown as Recommendeddocument).recommendeddocumentid = n.getStringValue(); },
            "source": (o, n) => { (o as unknown as Recommendeddocument).source = n.getStringValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Recommendeddocument).timezoneruleversionnumber = n.getNumberValue(); },
            "title": (o, n) => { (o as unknown as Recommendeddocument).title = n.getStringValue(); },
            "transactioncurrencyidname": (o, n) => { (o as unknown as Recommendeddocument).transactioncurrencyidname = n.getObjectValue<Transactioncurrency>(createTransactioncurrencyFromDiscriminatorValue); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Recommendeddocument).utcconversiontimezonecode = n.getNumberValue(); },
            "version": (o, n) => { (o as unknown as Recommendeddocument).version = n.getStringValue(); },
            "versionnumber": (o, n) => { (o as unknown as Recommendeddocument).versionnumber = n.getNumberValue(); },
        };
    };
    /**
     * Gets the iconclassname property value. 
     * @returns a string
     */
    public get iconclassname() {
        return this._iconclassname;
    };
    /**
     * Sets the iconclassname property value. 
     * @param value Value to set for the iconclassname property.
     */
    public set iconclassname(value: string | undefined) {
        this._iconclassname = value;
    };
    /**
     * Gets the location property value. 
     * @returns a string
     */
    public get location() {
        return this._location;
    };
    /**
     * Sets the location property value. 
     * @param value Value to set for the location property.
     */
    public set location(value: string | undefined) {
        this._location = value;
    };
    /**
     * Gets the modifiedbyname property value. 
     * @returns a systemuser
     */
    public get modifiedbyname() {
        return this._modifiedbyname;
    };
    /**
     * Sets the modifiedbyname property value. 
     * @param value Value to set for the modifiedbyname property.
     */
    public set modifiedbyname(value: Systemuser | undefined) {
        this._modifiedbyname = value;
    };
    /**
     * Gets the modifiedon property value. 
     * @returns a Date
     */
    public get modifiedon() {
        return this._modifiedon;
    };
    /**
     * Sets the modifiedon property value. 
     * @param value Value to set for the modifiedon property.
     */
    public set modifiedon(value: Date | undefined) {
        this._modifiedon = value;
    };
    /**
     * Gets the modifiedonbehalfbyname property value. 
     * @returns a systemuser
     */
    public get modifiedonbehalfbyname() {
        return this._modifiedonbehalfbyname;
    };
    /**
     * Sets the modifiedonbehalfbyname property value. 
     * @param value Value to set for the modifiedonbehalfbyname property.
     */
    public set modifiedonbehalfbyname(value: Systemuser | undefined) {
        this._modifiedonbehalfbyname = value;
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
     * Gets the readurl property value. 
     * @returns a string
     */
    public get readurl() {
        return this._readurl;
    };
    /**
     * Sets the readurl property value. 
     * @param value Value to set for the readurl property.
     */
    public set readurl(value: string | undefined) {
        this._readurl = value;
    };
    /**
     * Gets the recommendeddocumentid property value. 
     * @returns a string
     */
    public get recommendeddocumentid() {
        return this._recommendeddocumentid;
    };
    /**
     * Sets the recommendeddocumentid property value. 
     * @param value Value to set for the recommendeddocumentid property.
     */
    public set recommendeddocumentid(value: string | undefined) {
        this._recommendeddocumentid = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("_createdby_value", this._createdby_value);
        writer.writeStringValue("_createdonbehalfby_value", this._createdonbehalfby_value);
        writer.writeStringValue("_modifiedby_value", this._modifiedby_value);
        writer.writeStringValue("_modifiedonbehalfby_value", this._modifiedonbehalfby_value);
        writer.writeStringValue("_organizationid_value", this._organizationid_value);
        writer.writeStringValue("_regardingobjectid_value", this._regardingobjectid_value);
        writer.writeStringValue("_transactioncurrencyid_value", this._transactioncurrencyid_value);
        writer.writeStringValue("absoluteurl", this.absoluteurl);
        writer.writeStringValue("associatedrecordname", this.associatedrecordname);
        writer.writeStringValue("author", this.author);
        writer.writeStringValue("contenttype", this.contenttype);
        writer.writeObjectValue<Systemuser>("createdbyname", this.createdbyname);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfbyname", this.createdonbehalfbyname);
        writer.writeStringValue("editurl", this.editurl);
        writer.writeNumberValue("exchangerate", this.exchangerate);
        writer.writeStringValue("externaldocumentid", this.externaldocumentid);
        writer.writeStringValue("externalmodifiedby", this.externalmodifiedby);
        writer.writeNumberValue("filesize", this.filesize);
        writer.writeStringValue("filetype", this.filetype);
        writer.writeStringValue("fullname", this.fullname);
        writer.writeStringValue("iconclassname", this.iconclassname);
        writer.writeStringValue("location", this.location);
        writer.writeObjectValue<Systemuser>("modifiedbyname", this.modifiedbyname);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfbyname", this.modifiedonbehalfbyname);
        writer.writeObjectValue<Organization>("organizationid", this.organizationid);
        writer.writeStringValue("readurl", this.readurl);
        writer.writeStringValue("recommendeddocumentid", this.recommendeddocumentid);
        writer.writeStringValue("source", this.source);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeStringValue("title", this.title);
        writer.writeObjectValue<Transactioncurrency>("transactioncurrencyidname", this.transactioncurrencyidname);
        writer.writeNumberValue("utcconversiontimezonecode", this.utcconversiontimezonecode);
        writer.writeStringValue("version", this.version);
        writer.writeNumberValue("versionnumber", this.versionnumber);
    };
    /**
     * Gets the source property value. 
     * @returns a string
     */
    public get source() {
        return this._source;
    };
    /**
     * Sets the source property value. 
     * @param value Value to set for the source property.
     */
    public set source(value: string | undefined) {
        this._source = value;
    };
    /**
     * Gets the timezoneruleversionnumber property value. 
     * @returns a integer
     */
    public get timezoneruleversionnumber() {
        return this._timezoneruleversionnumber;
    };
    /**
     * Sets the timezoneruleversionnumber property value. 
     * @param value Value to set for the timezoneruleversionnumber property.
     */
    public set timezoneruleversionnumber(value: number | undefined) {
        this._timezoneruleversionnumber = value;
    };
    /**
     * Gets the title property value. 
     * @returns a string
     */
    public get title() {
        return this._title;
    };
    /**
     * Sets the title property value. 
     * @param value Value to set for the title property.
     */
    public set title(value: string | undefined) {
        this._title = value;
    };
    /**
     * Gets the transactioncurrencyidname property value. 
     * @returns a transactioncurrency
     */
    public get transactioncurrencyidname() {
        return this._transactioncurrencyidname;
    };
    /**
     * Sets the transactioncurrencyidname property value. 
     * @param value Value to set for the transactioncurrencyidname property.
     */
    public set transactioncurrencyidname(value: Transactioncurrency | undefined) {
        this._transactioncurrencyidname = value;
    };
    /**
     * Gets the utcconversiontimezonecode property value. 
     * @returns a integer
     */
    public get utcconversiontimezonecode() {
        return this._utcconversiontimezonecode;
    };
    /**
     * Sets the utcconversiontimezonecode property value. 
     * @param value Value to set for the utcconversiontimezonecode property.
     */
    public set utcconversiontimezonecode(value: number | undefined) {
        this._utcconversiontimezonecode = value;
    };
    /**
     * Gets the version property value. 
     * @returns a string
     */
    public get version() {
        return this._version;
    };
    /**
     * Sets the version property value. 
     * @param value Value to set for the version property.
     */
    public set version(value: string | undefined) {
        this._version = value;
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
