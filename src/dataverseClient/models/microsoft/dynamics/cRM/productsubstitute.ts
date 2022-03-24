import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createProductFromDiscriminatorValue} from './createProductFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTransactioncurrencyFromDiscriminatorValue} from './createTransactioncurrencyFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Crmbaseentity, Mailboxtrackingfolder, Organization, Principalobjectattributeaccess, Processsession, Product, Syncerror, Systemuser, Transactioncurrency} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Productsubstitute extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __organizationid_value?: string | undefined;
    private __productid_value?: string | undefined;
    private __substitutedproductid_value?: string | undefined;
    private __transactioncurrencyid_value?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _direction?: number | undefined;
    private _exchangerate?: number | undefined;
    private _importsequencenumber?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _name?: string | undefined;
    private _organizationid?: Organization | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _productid?: Product | undefined;
    private _productSubstitute_AsyncOperations?: Asyncoperation[] | undefined;
    private _productSubstitute_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _productsubstitute_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _productSubstitute_PrincipalObjectAttributeAccess?: Principalobjectattributeaccess[] | undefined;
    private _productSubstitute_ProcessSession?: Processsession[] | undefined;
    private _productSubstitute_SyncErrors?: Syncerror[] | undefined;
    private _productsubstituteid?: string | undefined;
    private _salesrelationshiptype?: number | undefined;
    private _statecode?: number | undefined;
    private _statuscode?: number | undefined;
    private _substitutedproductid?: Product | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _transactioncurrencyid?: Transactioncurrency | undefined;
    private _utcconversiontimezonecode?: number | undefined;
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
     * Gets the _productid_value property value. 
     * @returns a string
     */
    public get _productid_value() {
        return this.__productid_value;
    };
    /**
     * Sets the _productid_value property value. 
     * @param value Value to set for the _productid_value property.
     */
    public set _productid_value(value: string | undefined) {
        this.__productid_value = value;
    };
    /**
     * Gets the _substitutedproductid_value property value. 
     * @returns a string
     */
    public get _substitutedproductid_value() {
        return this.__substitutedproductid_value;
    };
    /**
     * Sets the _substitutedproductid_value property value. 
     * @param value Value to set for the _substitutedproductid_value property.
     */
    public set _substitutedproductid_value(value: string | undefined) {
        this.__substitutedproductid_value = value;
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
     * Instantiates a new productsubstitute and sets the default values.
     */
    public constructor() {
        super();
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
     * Gets the direction property value. 
     * @returns a integer
     */
    public get direction() {
        return this._direction;
    };
    /**
     * Sets the direction property value. 
     * @param value Value to set for the direction property.
     */
    public set direction(value: number | undefined) {
        this._direction = value;
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
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Productsubstitute)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Productsubstitute)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Productsubstitute)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Productsubstitute)._modifiedonbehalfby_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Productsubstitute)._organizationid_value = n.getStringValue(); },
            "_productid_value": (o, n) => { (o as unknown as Productsubstitute)._productid_value = n.getStringValue(); },
            "_substitutedproductid_value": (o, n) => { (o as unknown as Productsubstitute)._substitutedproductid_value = n.getStringValue(); },
            "_transactioncurrencyid_value": (o, n) => { (o as unknown as Productsubstitute)._transactioncurrencyid_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Productsubstitute).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Productsubstitute).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Productsubstitute).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "direction": (o, n) => { (o as unknown as Productsubstitute).direction = n.getNumberValue(); },
            "exchangerate": (o, n) => { (o as unknown as Productsubstitute).exchangerate = n.getNumberValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Productsubstitute).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Productsubstitute).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Productsubstitute).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Productsubstitute).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "name": (o, n) => { (o as unknown as Productsubstitute).name = n.getStringValue(); },
            "organizationid": (o, n) => { (o as unknown as Productsubstitute).organizationid = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Productsubstitute).overriddencreatedon = n.getDateValue(); },
            "productid": (o, n) => { (o as unknown as Productsubstitute).productid = n.getObjectValue<Product>(createProductFromDiscriminatorValue); },
            "productSubstitute_AsyncOperations": (o, n) => { (o as unknown as Productsubstitute).productSubstitute_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "productSubstitute_BulkDeleteFailures": (o, n) => { (o as unknown as Productsubstitute).productSubstitute_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "productsubstitute_MailboxTrackingFolders": (o, n) => { (o as unknown as Productsubstitute).productsubstitute_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "productSubstitute_PrincipalObjectAttributeAccess": (o, n) => { (o as unknown as Productsubstitute).productSubstitute_PrincipalObjectAttributeAccess = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "productSubstitute_ProcessSession": (o, n) => { (o as unknown as Productsubstitute).productSubstitute_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "productSubstitute_SyncErrors": (o, n) => { (o as unknown as Productsubstitute).productSubstitute_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "productsubstituteid": (o, n) => { (o as unknown as Productsubstitute).productsubstituteid = n.getStringValue(); },
            "salesrelationshiptype": (o, n) => { (o as unknown as Productsubstitute).salesrelationshiptype = n.getNumberValue(); },
            "statecode": (o, n) => { (o as unknown as Productsubstitute).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Productsubstitute).statuscode = n.getNumberValue(); },
            "substitutedproductid": (o, n) => { (o as unknown as Productsubstitute).substitutedproductid = n.getObjectValue<Product>(createProductFromDiscriminatorValue); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Productsubstitute).timezoneruleversionnumber = n.getNumberValue(); },
            "transactioncurrencyid": (o, n) => { (o as unknown as Productsubstitute).transactioncurrencyid = n.getObjectValue<Transactioncurrency>(createTransactioncurrencyFromDiscriminatorValue); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Productsubstitute).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Productsubstitute).versionnumber = n.getNumberValue(); },
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
     * Gets the productid property value. 
     * @returns a product
     */
    public get productid() {
        return this._productid;
    };
    /**
     * Sets the productid property value. 
     * @param value Value to set for the productid property.
     */
    public set productid(value: Product | undefined) {
        this._productid = value;
    };
    /**
     * Gets the productSubstitute_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get productSubstitute_AsyncOperations() {
        return this._productSubstitute_AsyncOperations;
    };
    /**
     * Sets the productSubstitute_AsyncOperations property value. 
     * @param value Value to set for the ProductSubstitute_AsyncOperations property.
     */
    public set productSubstitute_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._productSubstitute_AsyncOperations = value;
    };
    /**
     * Gets the productSubstitute_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get productSubstitute_BulkDeleteFailures() {
        return this._productSubstitute_BulkDeleteFailures;
    };
    /**
     * Sets the productSubstitute_BulkDeleteFailures property value. 
     * @param value Value to set for the ProductSubstitute_BulkDeleteFailures property.
     */
    public set productSubstitute_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._productSubstitute_BulkDeleteFailures = value;
    };
    /**
     * Gets the productsubstitute_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get productsubstitute_MailboxTrackingFolders() {
        return this._productsubstitute_MailboxTrackingFolders;
    };
    /**
     * Sets the productsubstitute_MailboxTrackingFolders property value. 
     * @param value Value to set for the productsubstitute_MailboxTrackingFolders property.
     */
    public set productsubstitute_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._productsubstitute_MailboxTrackingFolders = value;
    };
    /**
     * Gets the productSubstitute_PrincipalObjectAttributeAccess property value. 
     * @returns a principalobjectattributeaccess
     */
    public get productSubstitute_PrincipalObjectAttributeAccess() {
        return this._productSubstitute_PrincipalObjectAttributeAccess;
    };
    /**
     * Sets the productSubstitute_PrincipalObjectAttributeAccess property value. 
     * @param value Value to set for the ProductSubstitute_PrincipalObjectAttributeAccess property.
     */
    public set productSubstitute_PrincipalObjectAttributeAccess(value: Principalobjectattributeaccess[] | undefined) {
        this._productSubstitute_PrincipalObjectAttributeAccess = value;
    };
    /**
     * Gets the productSubstitute_ProcessSession property value. 
     * @returns a processsession
     */
    public get productSubstitute_ProcessSession() {
        return this._productSubstitute_ProcessSession;
    };
    /**
     * Sets the productSubstitute_ProcessSession property value. 
     * @param value Value to set for the ProductSubstitute_ProcessSession property.
     */
    public set productSubstitute_ProcessSession(value: Processsession[] | undefined) {
        this._productSubstitute_ProcessSession = value;
    };
    /**
     * Gets the productSubstitute_SyncErrors property value. 
     * @returns a syncerror
     */
    public get productSubstitute_SyncErrors() {
        return this._productSubstitute_SyncErrors;
    };
    /**
     * Sets the productSubstitute_SyncErrors property value. 
     * @param value Value to set for the ProductSubstitute_SyncErrors property.
     */
    public set productSubstitute_SyncErrors(value: Syncerror[] | undefined) {
        this._productSubstitute_SyncErrors = value;
    };
    /**
     * Gets the productsubstituteid property value. 
     * @returns a string
     */
    public get productsubstituteid() {
        return this._productsubstituteid;
    };
    /**
     * Sets the productsubstituteid property value. 
     * @param value Value to set for the productsubstituteid property.
     */
    public set productsubstituteid(value: string | undefined) {
        this._productsubstituteid = value;
    };
    /**
     * Gets the salesrelationshiptype property value. 
     * @returns a integer
     */
    public get salesrelationshiptype() {
        return this._salesrelationshiptype;
    };
    /**
     * Sets the salesrelationshiptype property value. 
     * @param value Value to set for the salesrelationshiptype property.
     */
    public set salesrelationshiptype(value: number | undefined) {
        this._salesrelationshiptype = value;
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
        writer.writeStringValue("_productid_value", this._productid_value);
        writer.writeStringValue("_substitutedproductid_value", this._substitutedproductid_value);
        writer.writeStringValue("_transactioncurrencyid_value", this._transactioncurrencyid_value);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeNumberValue("direction", this.direction);
        writer.writeNumberValue("exchangerate", this.exchangerate);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeStringValue("name", this.name);
        writer.writeObjectValue<Organization>("organizationid", this.organizationid);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeObjectValue<Product>("productid", this.productid);
        writer.writeCollectionOfObjectValues<Asyncoperation>("productSubstitute_AsyncOperations", this.productSubstitute_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("productSubstitute_BulkDeleteFailures", this.productSubstitute_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("productsubstitute_MailboxTrackingFolders", this.productsubstitute_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("productSubstitute_PrincipalObjectAttributeAccess", this.productSubstitute_PrincipalObjectAttributeAccess);
        writer.writeCollectionOfObjectValues<Processsession>("productSubstitute_ProcessSession", this.productSubstitute_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("productSubstitute_SyncErrors", this.productSubstitute_SyncErrors);
        writer.writeStringValue("productsubstituteid", this.productsubstituteid);
        writer.writeNumberValue("salesrelationshiptype", this.salesrelationshiptype);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
        writer.writeObjectValue<Product>("substitutedproductid", this.substitutedproductid);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeObjectValue<Transactioncurrency>("transactioncurrencyid", this.transactioncurrencyid);
        writer.writeNumberValue("utcconversiontimezonecode", this.utcconversiontimezonecode);
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
     * Gets the substitutedproductid property value. 
     * @returns a product
     */
    public get substitutedproductid() {
        return this._substitutedproductid;
    };
    /**
     * Sets the substitutedproductid property value. 
     * @param value Value to set for the substitutedproductid property.
     */
    public set substitutedproductid(value: Product | undefined) {
        this._substitutedproductid = value;
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
}
