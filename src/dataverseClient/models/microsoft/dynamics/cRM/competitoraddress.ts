import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createCompetitorFromDiscriminatorValue} from './createCompetitorFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Competitor, Crmbaseentity, Mailboxtrackingfolder, Principalobjectattributeaccess, Syncerror, Systemuser} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Competitoraddress extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __parentid_value?: string | undefined;
    private _addressnumber?: number | undefined;
    private _addresstypecode?: number | undefined;
    private _city?: string | undefined;
    private _competitoraddress_AsyncOperations?: Asyncoperation[] | undefined;
    private _competitoraddress_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _competitoraddress_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _competitoraddress_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _competitorAddress_SyncErrors?: Syncerror[] | undefined;
    private _competitoraddressid?: string | undefined;
    private _composite?: string | undefined;
    private _country?: string | undefined;
    private _county?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _fax?: string | undefined;
    private _importsequencenumber?: number | undefined;
    private _latitude?: number | undefined;
    private _line1?: string | undefined;
    private _line2?: string | undefined;
    private _line3?: string | undefined;
    private _longitude?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _name?: string | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _parentid?: Competitor | undefined;
    private _postalcode?: string | undefined;
    private _postofficebox?: string | undefined;
    private _shippingmethodcode?: number | undefined;
    private _stateorprovince?: string | undefined;
    private _telephone1?: string | undefined;
    private _telephone2?: string | undefined;
    private _telephone3?: string | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _upszone?: string | undefined;
    private _utcconversiontimezonecode?: number | undefined;
    private _utcoffset?: number | undefined;
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
     * Gets the _parentid_value property value. 
     * @returns a string
     */
    public get _parentid_value() {
        return this.__parentid_value;
    };
    /**
     * Sets the _parentid_value property value. 
     * @param value Value to set for the _parentid_value property.
     */
    public set _parentid_value(value: string | undefined) {
        this.__parentid_value = value;
    };
    /**
     * Gets the addressnumber property value. 
     * @returns a integer
     */
    public get addressnumber() {
        return this._addressnumber;
    };
    /**
     * Sets the addressnumber property value. 
     * @param value Value to set for the addressnumber property.
     */
    public set addressnumber(value: number | undefined) {
        this._addressnumber = value;
    };
    /**
     * Gets the addresstypecode property value. 
     * @returns a integer
     */
    public get addresstypecode() {
        return this._addresstypecode;
    };
    /**
     * Sets the addresstypecode property value. 
     * @param value Value to set for the addresstypecode property.
     */
    public set addresstypecode(value: number | undefined) {
        this._addresstypecode = value;
    };
    /**
     * Gets the city property value. 
     * @returns a string
     */
    public get city() {
        return this._city;
    };
    /**
     * Sets the city property value. 
     * @param value Value to set for the city property.
     */
    public set city(value: string | undefined) {
        this._city = value;
    };
    /**
     * Gets the competitoraddress_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get competitoraddress_AsyncOperations() {
        return this._competitoraddress_AsyncOperations;
    };
    /**
     * Sets the competitoraddress_AsyncOperations property value. 
     * @param value Value to set for the competitoraddress_AsyncOperations property.
     */
    public set competitoraddress_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._competitoraddress_AsyncOperations = value;
    };
    /**
     * Gets the competitoraddress_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get competitoraddress_BulkDeleteFailures() {
        return this._competitoraddress_BulkDeleteFailures;
    };
    /**
     * Sets the competitoraddress_BulkDeleteFailures property value. 
     * @param value Value to set for the competitoraddress_BulkDeleteFailures property.
     */
    public set competitoraddress_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._competitoraddress_BulkDeleteFailures = value;
    };
    /**
     * Gets the competitoraddress_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get competitoraddress_MailboxTrackingFolders() {
        return this._competitoraddress_MailboxTrackingFolders;
    };
    /**
     * Sets the competitoraddress_MailboxTrackingFolders property value. 
     * @param value Value to set for the competitoraddress_MailboxTrackingFolders property.
     */
    public set competitoraddress_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._competitoraddress_MailboxTrackingFolders = value;
    };
    /**
     * Gets the competitoraddress_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get competitoraddress_PrincipalObjectAttributeAccesses() {
        return this._competitoraddress_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the competitoraddress_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the competitoraddress_PrincipalObjectAttributeAccesses property.
     */
    public set competitoraddress_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._competitoraddress_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the competitorAddress_SyncErrors property value. 
     * @returns a syncerror
     */
    public get competitorAddress_SyncErrors() {
        return this._competitorAddress_SyncErrors;
    };
    /**
     * Sets the competitorAddress_SyncErrors property value. 
     * @param value Value to set for the CompetitorAddress_SyncErrors property.
     */
    public set competitorAddress_SyncErrors(value: Syncerror[] | undefined) {
        this._competitorAddress_SyncErrors = value;
    };
    /**
     * Gets the competitoraddressid property value. 
     * @returns a string
     */
    public get competitoraddressid() {
        return this._competitoraddressid;
    };
    /**
     * Sets the competitoraddressid property value. 
     * @param value Value to set for the competitoraddressid property.
     */
    public set competitoraddressid(value: string | undefined) {
        this._competitoraddressid = value;
    };
    /**
     * Gets the composite property value. 
     * @returns a string
     */
    public get composite() {
        return this._composite;
    };
    /**
     * Sets the composite property value. 
     * @param value Value to set for the composite property.
     */
    public set composite(value: string | undefined) {
        this._composite = value;
    };
    /**
     * Instantiates a new competitoraddress and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the country property value. 
     * @returns a string
     */
    public get country() {
        return this._country;
    };
    /**
     * Sets the country property value. 
     * @param value Value to set for the country property.
     */
    public set country(value: string | undefined) {
        this._country = value;
    };
    /**
     * Gets the county property value. 
     * @returns a string
     */
    public get county() {
        return this._county;
    };
    /**
     * Sets the county property value. 
     * @param value Value to set for the county property.
     */
    public set county(value: string | undefined) {
        this._county = value;
    };
    /**
     * Gets the createdby property value. 
     * @returns a systemuser
     */
    public get createdby() {
        return this._createdby;
    };
    /**
     * Sets the createdby property value. 
     * @param value Value to set for the createdby property.
     */
    public set createdby(value: Systemuser | undefined) {
        this._createdby = value;
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
     * Gets the fax property value. 
     * @returns a string
     */
    public get fax() {
        return this._fax;
    };
    /**
     * Sets the fax property value. 
     * @param value Value to set for the fax property.
     */
    public set fax(value: string | undefined) {
        this._fax = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Competitoraddress)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Competitoraddress)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Competitoraddress)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Competitoraddress)._modifiedonbehalfby_value = n.getStringValue(); },
            "_parentid_value": (o, n) => { (o as unknown as Competitoraddress)._parentid_value = n.getStringValue(); },
            "addressnumber": (o, n) => { (o as unknown as Competitoraddress).addressnumber = n.getNumberValue(); },
            "addresstypecode": (o, n) => { (o as unknown as Competitoraddress).addresstypecode = n.getNumberValue(); },
            "city": (o, n) => { (o as unknown as Competitoraddress).city = n.getStringValue(); },
            "competitoraddress_AsyncOperations": (o, n) => { (o as unknown as Competitoraddress).competitoraddress_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "competitoraddress_BulkDeleteFailures": (o, n) => { (o as unknown as Competitoraddress).competitoraddress_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "competitoraddress_MailboxTrackingFolders": (o, n) => { (o as unknown as Competitoraddress).competitoraddress_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "competitoraddress_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Competitoraddress).competitoraddress_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "competitorAddress_SyncErrors": (o, n) => { (o as unknown as Competitoraddress).competitorAddress_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "competitoraddressid": (o, n) => { (o as unknown as Competitoraddress).competitoraddressid = n.getStringValue(); },
            "composite": (o, n) => { (o as unknown as Competitoraddress).composite = n.getStringValue(); },
            "country": (o, n) => { (o as unknown as Competitoraddress).country = n.getStringValue(); },
            "county": (o, n) => { (o as unknown as Competitoraddress).county = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Competitoraddress).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Competitoraddress).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Competitoraddress).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "fax": (o, n) => { (o as unknown as Competitoraddress).fax = n.getStringValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Competitoraddress).importsequencenumber = n.getNumberValue(); },
            "latitude": (o, n) => { (o as unknown as Competitoraddress).latitude = n.getNumberValue(); },
            "line1": (o, n) => { (o as unknown as Competitoraddress).line1 = n.getStringValue(); },
            "line2": (o, n) => { (o as unknown as Competitoraddress).line2 = n.getStringValue(); },
            "line3": (o, n) => { (o as unknown as Competitoraddress).line3 = n.getStringValue(); },
            "longitude": (o, n) => { (o as unknown as Competitoraddress).longitude = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Competitoraddress).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Competitoraddress).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Competitoraddress).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "name": (o, n) => { (o as unknown as Competitoraddress).name = n.getStringValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Competitoraddress).overriddencreatedon = n.getDateValue(); },
            "parentid": (o, n) => { (o as unknown as Competitoraddress).parentid = n.getObjectValue<Competitor>(createCompetitorFromDiscriminatorValue); },
            "postalcode": (o, n) => { (o as unknown as Competitoraddress).postalcode = n.getStringValue(); },
            "postofficebox": (o, n) => { (o as unknown as Competitoraddress).postofficebox = n.getStringValue(); },
            "shippingmethodcode": (o, n) => { (o as unknown as Competitoraddress).shippingmethodcode = n.getNumberValue(); },
            "stateorprovince": (o, n) => { (o as unknown as Competitoraddress).stateorprovince = n.getStringValue(); },
            "telephone1": (o, n) => { (o as unknown as Competitoraddress).telephone1 = n.getStringValue(); },
            "telephone2": (o, n) => { (o as unknown as Competitoraddress).telephone2 = n.getStringValue(); },
            "telephone3": (o, n) => { (o as unknown as Competitoraddress).telephone3 = n.getStringValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Competitoraddress).timezoneruleversionnumber = n.getNumberValue(); },
            "upszone": (o, n) => { (o as unknown as Competitoraddress).upszone = n.getStringValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Competitoraddress).utcconversiontimezonecode = n.getNumberValue(); },
            "utcoffset": (o, n) => { (o as unknown as Competitoraddress).utcoffset = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Competitoraddress).versionnumber = n.getNumberValue(); },
        };
    };
    /**
     * Gets the importsequencenumber property value. 
     * @returns a integer
     */
    public get importsequencenumber() {
        return this._importsequencenumber;
    };
    /**
     * Sets the importsequencenumber property value. 
     * @param value Value to set for the importsequencenumber property.
     */
    public set importsequencenumber(value: number | undefined) {
        this._importsequencenumber = value;
    };
    /**
     * Gets the latitude property value. 
     * @returns a double
     */
    public get latitude() {
        return this._latitude;
    };
    /**
     * Sets the latitude property value. 
     * @param value Value to set for the latitude property.
     */
    public set latitude(value: number | undefined) {
        this._latitude = value;
    };
    /**
     * Gets the line1 property value. 
     * @returns a string
     */
    public get line1() {
        return this._line1;
    };
    /**
     * Sets the line1 property value. 
     * @param value Value to set for the line1 property.
     */
    public set line1(value: string | undefined) {
        this._line1 = value;
    };
    /**
     * Gets the line2 property value. 
     * @returns a string
     */
    public get line2() {
        return this._line2;
    };
    /**
     * Sets the line2 property value. 
     * @param value Value to set for the line2 property.
     */
    public set line2(value: string | undefined) {
        this._line2 = value;
    };
    /**
     * Gets the line3 property value. 
     * @returns a string
     */
    public get line3() {
        return this._line3;
    };
    /**
     * Sets the line3 property value. 
     * @param value Value to set for the line3 property.
     */
    public set line3(value: string | undefined) {
        this._line3 = value;
    };
    /**
     * Gets the longitude property value. 
     * @returns a double
     */
    public get longitude() {
        return this._longitude;
    };
    /**
     * Sets the longitude property value. 
     * @param value Value to set for the longitude property.
     */
    public set longitude(value: number | undefined) {
        this._longitude = value;
    };
    /**
     * Gets the modifiedby property value. 
     * @returns a systemuser
     */
    public get modifiedby() {
        return this._modifiedby;
    };
    /**
     * Sets the modifiedby property value. 
     * @param value Value to set for the modifiedby property.
     */
    public set modifiedby(value: Systemuser | undefined) {
        this._modifiedby = value;
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
     * Gets the overriddencreatedon property value. 
     * @returns a Date
     */
    public get overriddencreatedon() {
        return this._overriddencreatedon;
    };
    /**
     * Sets the overriddencreatedon property value. 
     * @param value Value to set for the overriddencreatedon property.
     */
    public set overriddencreatedon(value: Date | undefined) {
        this._overriddencreatedon = value;
    };
    /**
     * Gets the parentid property value. 
     * @returns a competitor
     */
    public get parentid() {
        return this._parentid;
    };
    /**
     * Sets the parentid property value. 
     * @param value Value to set for the parentid property.
     */
    public set parentid(value: Competitor | undefined) {
        this._parentid = value;
    };
    /**
     * Gets the postalcode property value. 
     * @returns a string
     */
    public get postalcode() {
        return this._postalcode;
    };
    /**
     * Sets the postalcode property value. 
     * @param value Value to set for the postalcode property.
     */
    public set postalcode(value: string | undefined) {
        this._postalcode = value;
    };
    /**
     * Gets the postofficebox property value. 
     * @returns a string
     */
    public get postofficebox() {
        return this._postofficebox;
    };
    /**
     * Sets the postofficebox property value. 
     * @param value Value to set for the postofficebox property.
     */
    public set postofficebox(value: string | undefined) {
        this._postofficebox = value;
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
        writer.writeStringValue("_parentid_value", this._parentid_value);
        writer.writeNumberValue("addressnumber", this.addressnumber);
        writer.writeNumberValue("addresstypecode", this.addresstypecode);
        writer.writeStringValue("city", this.city);
        writer.writeCollectionOfObjectValues<Asyncoperation>("competitoraddress_AsyncOperations", this.competitoraddress_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("competitoraddress_BulkDeleteFailures", this.competitoraddress_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("competitoraddress_MailboxTrackingFolders", this.competitoraddress_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("competitoraddress_PrincipalObjectAttributeAccesses", this.competitoraddress_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Syncerror>("competitorAddress_SyncErrors", this.competitorAddress_SyncErrors);
        writer.writeStringValue("competitoraddressid", this.competitoraddressid);
        writer.writeStringValue("composite", this.composite);
        writer.writeStringValue("country", this.country);
        writer.writeStringValue("county", this.county);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeStringValue("fax", this.fax);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeNumberValue("latitude", this.latitude);
        writer.writeStringValue("line1", this.line1);
        writer.writeStringValue("line2", this.line2);
        writer.writeStringValue("line3", this.line3);
        writer.writeNumberValue("longitude", this.longitude);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeStringValue("name", this.name);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeObjectValue<Competitor>("parentid", this.parentid);
        writer.writeStringValue("postalcode", this.postalcode);
        writer.writeStringValue("postofficebox", this.postofficebox);
        writer.writeNumberValue("shippingmethodcode", this.shippingmethodcode);
        writer.writeStringValue("stateorprovince", this.stateorprovince);
        writer.writeStringValue("telephone1", this.telephone1);
        writer.writeStringValue("telephone2", this.telephone2);
        writer.writeStringValue("telephone3", this.telephone3);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeStringValue("upszone", this.upszone);
        writer.writeNumberValue("utcconversiontimezonecode", this.utcconversiontimezonecode);
        writer.writeNumberValue("utcoffset", this.utcoffset);
        writer.writeNumberValue("versionnumber", this.versionnumber);
    };
    /**
     * Gets the shippingmethodcode property value. 
     * @returns a integer
     */
    public get shippingmethodcode() {
        return this._shippingmethodcode;
    };
    /**
     * Sets the shippingmethodcode property value. 
     * @param value Value to set for the shippingmethodcode property.
     */
    public set shippingmethodcode(value: number | undefined) {
        this._shippingmethodcode = value;
    };
    /**
     * Gets the stateorprovince property value. 
     * @returns a string
     */
    public get stateorprovince() {
        return this._stateorprovince;
    };
    /**
     * Sets the stateorprovince property value. 
     * @param value Value to set for the stateorprovince property.
     */
    public set stateorprovince(value: string | undefined) {
        this._stateorprovince = value;
    };
    /**
     * Gets the telephone1 property value. 
     * @returns a string
     */
    public get telephone1() {
        return this._telephone1;
    };
    /**
     * Sets the telephone1 property value. 
     * @param value Value to set for the telephone1 property.
     */
    public set telephone1(value: string | undefined) {
        this._telephone1 = value;
    };
    /**
     * Gets the telephone2 property value. 
     * @returns a string
     */
    public get telephone2() {
        return this._telephone2;
    };
    /**
     * Sets the telephone2 property value. 
     * @param value Value to set for the telephone2 property.
     */
    public set telephone2(value: string | undefined) {
        this._telephone2 = value;
    };
    /**
     * Gets the telephone3 property value. 
     * @returns a string
     */
    public get telephone3() {
        return this._telephone3;
    };
    /**
     * Sets the telephone3 property value. 
     * @param value Value to set for the telephone3 property.
     */
    public set telephone3(value: string | undefined) {
        this._telephone3 = value;
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
     * Gets the upszone property value. 
     * @returns a string
     */
    public get upszone() {
        return this._upszone;
    };
    /**
     * Sets the upszone property value. 
     * @param value Value to set for the upszone property.
     */
    public set upszone(value: string | undefined) {
        this._upszone = value;
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
     * Gets the utcoffset property value. 
     * @returns a integer
     */
    public get utcoffset() {
        return this._utcoffset;
    };
    /**
     * Sets the utcoffset property value. 
     * @param value Value to set for the utcoffset property.
     */
    public set utcoffset(value: number | undefined) {
        this._utcoffset = value;
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
