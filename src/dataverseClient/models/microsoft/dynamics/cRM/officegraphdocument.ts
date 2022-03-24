import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTransactioncurrencyFromDiscriminatorValue} from './createTransactioncurrencyFromDiscriminatorValue';
import {Crmbaseentity, Organization, Systemuser, Transactioncurrency} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Officegraphdocument extends Crmbaseentity implements Parsable {
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __organizationid_value?: string | undefined;
    private __transactioncurrencyid_value?: string | undefined;
    private _authornames?: string | undefined;
    private _createdby?: string | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _createdtime?: Date | undefined;
    private _documentid?: string | undefined;
    private _documentlastmodifiedby?: string | undefined;
    private _documentlastmodifiedon?: Date | undefined;
    private _documentpreviewmetadata?: string | undefined;
    private _exchangerate?: number | undefined;
    private _fileextension?: string | undefined;
    private _filetype?: string | undefined;
    private _modifiedby?: string | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _modifiedtime?: Date | undefined;
    private _officegraphdocumentid?: string | undefined;
    private _organizationid?: Organization | undefined;
    private _previewimageurl?: string | undefined;
    private _querytype?: number | undefined;
    private _rank?: number | undefined;
    private _readurl?: string | undefined;
    private _secondaryfileextension?: string | undefined;
    private _sitetitle?: string | undefined;
    private _siteurl?: string | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _title?: string | undefined;
    private _transactioncurrencyid?: Transactioncurrency | undefined;
    private _utcconversiontimezonecode?: number | undefined;
    private _versionnumber?: number | undefined;
    private _viewcount?: number | undefined;
    private _weblocationurl?: string | undefined;
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
     * Gets the authornames property value. 
     * @returns a string
     */
    public get authornames() {
        return this._authornames;
    };
    /**
     * Sets the authornames property value. 
     * @param value Value to set for the authornames property.
     */
    public set authornames(value: string | undefined) {
        this._authornames = value;
    };
    /**
     * Instantiates a new officegraphdocument and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the createdby property value. 
     * @returns a string
     */
    public get createdby() {
        return this._createdby;
    };
    /**
     * Sets the createdby property value. 
     * @param value Value to set for the createdby property.
     */
    public set createdby(value: string | undefined) {
        this._createdby = value;
    };
    /**
     * Gets the createdonbehalfby property value. 
     * @returns a systemuser
     */
    public get createdonbehalfby() {
        return this._createdonbehalfby;
    };
    /**
     * Sets the createdonbehalfby property value. 
     * @param value Value to set for the createdonbehalfby property.
     */
    public set createdonbehalfby(value: Systemuser | undefined) {
        this._createdonbehalfby = value;
    };
    /**
     * Gets the createdtime property value. 
     * @returns a Date
     */
    public get createdtime() {
        return this._createdtime;
    };
    /**
     * Sets the createdtime property value. 
     * @param value Value to set for the createdtime property.
     */
    public set createdtime(value: Date | undefined) {
        this._createdtime = value;
    };
    /**
     * Gets the documentid property value. 
     * @returns a string
     */
    public get documentid() {
        return this._documentid;
    };
    /**
     * Sets the documentid property value. 
     * @param value Value to set for the documentid property.
     */
    public set documentid(value: string | undefined) {
        this._documentid = value;
    };
    /**
     * Gets the documentlastmodifiedby property value. 
     * @returns a string
     */
    public get documentlastmodifiedby() {
        return this._documentlastmodifiedby;
    };
    /**
     * Sets the documentlastmodifiedby property value. 
     * @param value Value to set for the documentlastmodifiedby property.
     */
    public set documentlastmodifiedby(value: string | undefined) {
        this._documentlastmodifiedby = value;
    };
    /**
     * Gets the documentlastmodifiedon property value. 
     * @returns a Date
     */
    public get documentlastmodifiedon() {
        return this._documentlastmodifiedon;
    };
    /**
     * Sets the documentlastmodifiedon property value. 
     * @param value Value to set for the documentlastmodifiedon property.
     */
    public set documentlastmodifiedon(value: Date | undefined) {
        this._documentlastmodifiedon = value;
    };
    /**
     * Gets the documentpreviewmetadata property value. 
     * @returns a string
     */
    public get documentpreviewmetadata() {
        return this._documentpreviewmetadata;
    };
    /**
     * Sets the documentpreviewmetadata property value. 
     * @param value Value to set for the documentpreviewmetadata property.
     */
    public set documentpreviewmetadata(value: string | undefined) {
        this._documentpreviewmetadata = value;
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
     * Gets the fileextension property value. 
     * @returns a string
     */
    public get fileextension() {
        return this._fileextension;
    };
    /**
     * Sets the fileextension property value. 
     * @param value Value to set for the fileextension property.
     */
    public set fileextension(value: string | undefined) {
        this._fileextension = value;
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
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Officegraphdocument)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Officegraphdocument)._modifiedonbehalfby_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Officegraphdocument)._organizationid_value = n.getStringValue(); },
            "_transactioncurrencyid_value": (o, n) => { (o as unknown as Officegraphdocument)._transactioncurrencyid_value = n.getStringValue(); },
            "authornames": (o, n) => { (o as unknown as Officegraphdocument).authornames = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Officegraphdocument).createdby = n.getStringValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Officegraphdocument).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdtime": (o, n) => { (o as unknown as Officegraphdocument).createdtime = n.getDateValue(); },
            "documentid": (o, n) => { (o as unknown as Officegraphdocument).documentid = n.getStringValue(); },
            "documentlastmodifiedby": (o, n) => { (o as unknown as Officegraphdocument).documentlastmodifiedby = n.getStringValue(); },
            "documentlastmodifiedon": (o, n) => { (o as unknown as Officegraphdocument).documentlastmodifiedon = n.getDateValue(); },
            "documentpreviewmetadata": (o, n) => { (o as unknown as Officegraphdocument).documentpreviewmetadata = n.getStringValue(); },
            "exchangerate": (o, n) => { (o as unknown as Officegraphdocument).exchangerate = n.getNumberValue(); },
            "fileextension": (o, n) => { (o as unknown as Officegraphdocument).fileextension = n.getStringValue(); },
            "filetype": (o, n) => { (o as unknown as Officegraphdocument).filetype = n.getStringValue(); },
            "modifiedby": (o, n) => { (o as unknown as Officegraphdocument).modifiedby = n.getStringValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Officegraphdocument).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedtime": (o, n) => { (o as unknown as Officegraphdocument).modifiedtime = n.getDateValue(); },
            "officegraphdocumentid": (o, n) => { (o as unknown as Officegraphdocument).officegraphdocumentid = n.getStringValue(); },
            "organizationid": (o, n) => { (o as unknown as Officegraphdocument).organizationid = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "previewimageurl": (o, n) => { (o as unknown as Officegraphdocument).previewimageurl = n.getStringValue(); },
            "querytype": (o, n) => { (o as unknown as Officegraphdocument).querytype = n.getNumberValue(); },
            "rank": (o, n) => { (o as unknown as Officegraphdocument).rank = n.getNumberValue(); },
            "readurl": (o, n) => { (o as unknown as Officegraphdocument).readurl = n.getStringValue(); },
            "secondaryfileextension": (o, n) => { (o as unknown as Officegraphdocument).secondaryfileextension = n.getStringValue(); },
            "sitetitle": (o, n) => { (o as unknown as Officegraphdocument).sitetitle = n.getStringValue(); },
            "siteurl": (o, n) => { (o as unknown as Officegraphdocument).siteurl = n.getStringValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Officegraphdocument).timezoneruleversionnumber = n.getNumberValue(); },
            "title": (o, n) => { (o as unknown as Officegraphdocument).title = n.getStringValue(); },
            "transactioncurrencyid": (o, n) => { (o as unknown as Officegraphdocument).transactioncurrencyid = n.getObjectValue<Transactioncurrency>(createTransactioncurrencyFromDiscriminatorValue); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Officegraphdocument).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Officegraphdocument).versionnumber = n.getNumberValue(); },
            "viewcount": (o, n) => { (o as unknown as Officegraphdocument).viewcount = n.getNumberValue(); },
            "weblocationurl": (o, n) => { (o as unknown as Officegraphdocument).weblocationurl = n.getStringValue(); },
        };
    };
    /**
     * Gets the modifiedby property value. 
     * @returns a string
     */
    public get modifiedby() {
        return this._modifiedby;
    };
    /**
     * Sets the modifiedby property value. 
     * @param value Value to set for the modifiedby property.
     */
    public set modifiedby(value: string | undefined) {
        this._modifiedby = value;
    };
    /**
     * Gets the modifiedonbehalfby property value. 
     * @returns a systemuser
     */
    public get modifiedonbehalfby() {
        return this._modifiedonbehalfby;
    };
    /**
     * Sets the modifiedonbehalfby property value. 
     * @param value Value to set for the modifiedonbehalfby property.
     */
    public set modifiedonbehalfby(value: Systemuser | undefined) {
        this._modifiedonbehalfby = value;
    };
    /**
     * Gets the modifiedtime property value. 
     * @returns a Date
     */
    public get modifiedtime() {
        return this._modifiedtime;
    };
    /**
     * Sets the modifiedtime property value. 
     * @param value Value to set for the modifiedtime property.
     */
    public set modifiedtime(value: Date | undefined) {
        this._modifiedtime = value;
    };
    /**
     * Gets the officegraphdocumentid property value. 
     * @returns a string
     */
    public get officegraphdocumentid() {
        return this._officegraphdocumentid;
    };
    /**
     * Sets the officegraphdocumentid property value. 
     * @param value Value to set for the officegraphdocumentid property.
     */
    public set officegraphdocumentid(value: string | undefined) {
        this._officegraphdocumentid = value;
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
     * Gets the previewimageurl property value. 
     * @returns a string
     */
    public get previewimageurl() {
        return this._previewimageurl;
    };
    /**
     * Sets the previewimageurl property value. 
     * @param value Value to set for the previewimageurl property.
     */
    public set previewimageurl(value: string | undefined) {
        this._previewimageurl = value;
    };
    /**
     * Gets the querytype property value. 
     * @returns a integer
     */
    public get querytype() {
        return this._querytype;
    };
    /**
     * Sets the querytype property value. 
     * @param value Value to set for the querytype property.
     */
    public set querytype(value: number | undefined) {
        this._querytype = value;
    };
    /**
     * Gets the rank property value. 
     * @returns a integer
     */
    public get rank() {
        return this._rank;
    };
    /**
     * Sets the rank property value. 
     * @param value Value to set for the rank property.
     */
    public set rank(value: number | undefined) {
        this._rank = value;
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
     * Gets the secondaryfileextension property value. 
     * @returns a string
     */
    public get secondaryfileextension() {
        return this._secondaryfileextension;
    };
    /**
     * Sets the secondaryfileextension property value. 
     * @param value Value to set for the secondaryfileextension property.
     */
    public set secondaryfileextension(value: string | undefined) {
        this._secondaryfileextension = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("_createdonbehalfby_value", this._createdonbehalfby_value);
        writer.writeStringValue("_modifiedonbehalfby_value", this._modifiedonbehalfby_value);
        writer.writeStringValue("_organizationid_value", this._organizationid_value);
        writer.writeStringValue("_transactioncurrencyid_value", this._transactioncurrencyid_value);
        writer.writeStringValue("authornames", this.authornames);
        writer.writeStringValue("createdby", this.createdby);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeDateValue("createdtime", this.createdtime);
        writer.writeStringValue("documentid", this.documentid);
        writer.writeStringValue("documentlastmodifiedby", this.documentlastmodifiedby);
        writer.writeDateValue("documentlastmodifiedon", this.documentlastmodifiedon);
        writer.writeStringValue("documentpreviewmetadata", this.documentpreviewmetadata);
        writer.writeNumberValue("exchangerate", this.exchangerate);
        writer.writeStringValue("fileextension", this.fileextension);
        writer.writeStringValue("filetype", this.filetype);
        writer.writeStringValue("modifiedby", this.modifiedby);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeDateValue("modifiedtime", this.modifiedtime);
        writer.writeStringValue("officegraphdocumentid", this.officegraphdocumentid);
        writer.writeObjectValue<Organization>("organizationid", this.organizationid);
        writer.writeStringValue("previewimageurl", this.previewimageurl);
        writer.writeNumberValue("querytype", this.querytype);
        writer.writeNumberValue("rank", this.rank);
        writer.writeStringValue("readurl", this.readurl);
        writer.writeStringValue("secondaryfileextension", this.secondaryfileextension);
        writer.writeStringValue("sitetitle", this.sitetitle);
        writer.writeStringValue("siteurl", this.siteurl);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeStringValue("title", this.title);
        writer.writeObjectValue<Transactioncurrency>("transactioncurrencyid", this.transactioncurrencyid);
        writer.writeNumberValue("utcconversiontimezonecode", this.utcconversiontimezonecode);
        writer.writeNumberValue("versionnumber", this.versionnumber);
        writer.writeNumberValue("viewcount", this.viewcount);
        writer.writeStringValue("weblocationurl", this.weblocationurl);
    };
    /**
     * Gets the sitetitle property value. 
     * @returns a string
     */
    public get sitetitle() {
        return this._sitetitle;
    };
    /**
     * Sets the sitetitle property value. 
     * @param value Value to set for the sitetitle property.
     */
    public set sitetitle(value: string | undefined) {
        this._sitetitle = value;
    };
    /**
     * Gets the siteurl property value. 
     * @returns a string
     */
    public get siteurl() {
        return this._siteurl;
    };
    /**
     * Sets the siteurl property value. 
     * @param value Value to set for the siteurl property.
     */
    public set siteurl(value: string | undefined) {
        this._siteurl = value;
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
     * Gets the transactioncurrencyid property value. 
     * @returns a transactioncurrency
     */
    public get transactioncurrencyid() {
        return this._transactioncurrencyid;
    };
    /**
     * Sets the transactioncurrencyid property value. 
     * @param value Value to set for the transactioncurrencyid property.
     */
    public set transactioncurrencyid(value: Transactioncurrency | undefined) {
        this._transactioncurrencyid = value;
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
    /**
     * Gets the viewcount property value. 
     * @returns a integer
     */
    public get viewcount() {
        return this._viewcount;
    };
    /**
     * Sets the viewcount property value. 
     * @param value Value to set for the viewcount property.
     */
    public set viewcount(value: number | undefined) {
        this._viewcount = value;
    };
    /**
     * Gets the weblocationurl property value. 
     * @returns a string
     */
    public get weblocationurl() {
        return this._weblocationurl;
    };
    /**
     * Sets the weblocationurl property value. 
     * @param value Value to set for the weblocationurl property.
     */
    public set weblocationurl(value: string | undefined) {
        this._weblocationurl = value;
    };
}
