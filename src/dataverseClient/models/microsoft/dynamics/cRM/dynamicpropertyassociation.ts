import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createDynamicpropertyFromDiscriminatorValue} from './createDynamicpropertyFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProductassociationFromDiscriminatorValue} from './createProductassociationFromDiscriminatorValue';
import {createProductFromDiscriminatorValue} from './createProductFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTransactioncurrencyFromDiscriminatorValue} from './createTransactioncurrencyFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Crmbaseentity, Dynamicproperty, Mailboxtrackingfolder, Organization, Principalobjectattributeaccess, Product, Productassociation, Syncerror, Systemuser, Transactioncurrency} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Dynamicpropertyassociation extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __dynamicpropertyid_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __organizationid_value?: string | undefined;
    private __regardingobjectid_value?: string | undefined;
    private __transactioncurrencyid_value?: string | undefined;
    private _associationstatus?: number | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _dmtimportstate?: number | undefined;
    private _dynamicpropertyassociation_AsyncOperations?: Asyncoperation[] | undefined;
    private _dynamicpropertyassociation_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _dynamicpropertyassociation_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _dynamicpropertyassociation_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _dynamicpropertyassociation_SyncErrors?: Syncerror[] | undefined;
    private _dynamicpropertyassociationid?: string | undefined;
    private _dynamicpropertyid?: Dynamicproperty | undefined;
    private _exchangerate?: number | undefined;
    private _importsequencenumber?: number | undefined;
    private _inheritancestate?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _name?: string | undefined;
    private _organizationid?: Organization | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _regardingobjectid_product?: Product | undefined;
    private _regardingobjectid_productassociation?: Productassociation | undefined;
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
     * Gets the _dynamicpropertyid_value property value. 
     * @returns a string
     */
    public get _dynamicpropertyid_value() {
        return this.__dynamicpropertyid_value;
    };
    /**
     * Sets the _dynamicpropertyid_value property value. 
     * @param value Value to set for the _dynamicpropertyid_value property.
     */
    public set _dynamicpropertyid_value(value: string | undefined) {
        this.__dynamicpropertyid_value = value;
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
     * Gets the associationstatus property value. 
     * @returns a integer
     */
    public get associationstatus() {
        return this._associationstatus;
    };
    /**
     * Sets the associationstatus property value. 
     * @param value Value to set for the associationstatus property.
     */
    public set associationstatus(value: number | undefined) {
        this._associationstatus = value;
    };
    /**
     * Instantiates a new dynamicpropertyassociation and sets the default values.
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
     * Gets the dmtimportstate property value. 
     * @returns a integer
     */
    public get dmtimportstate() {
        return this._dmtimportstate;
    };
    /**
     * Sets the dmtimportstate property value. 
     * @param value Value to set for the dmtimportstate property.
     */
    public set dmtimportstate(value: number | undefined) {
        this._dmtimportstate = value;
    };
    /**
     * Gets the dynamicpropertyassociation_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get dynamicpropertyassociation_AsyncOperations() {
        return this._dynamicpropertyassociation_AsyncOperations;
    };
    /**
     * Sets the dynamicpropertyassociation_AsyncOperations property value. 
     * @param value Value to set for the dynamicpropertyassociation_AsyncOperations property.
     */
    public set dynamicpropertyassociation_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._dynamicpropertyassociation_AsyncOperations = value;
    };
    /**
     * Gets the dynamicpropertyassociation_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get dynamicpropertyassociation_BulkDeleteFailures() {
        return this._dynamicpropertyassociation_BulkDeleteFailures;
    };
    /**
     * Sets the dynamicpropertyassociation_BulkDeleteFailures property value. 
     * @param value Value to set for the dynamicpropertyassociation_BulkDeleteFailures property.
     */
    public set dynamicpropertyassociation_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._dynamicpropertyassociation_BulkDeleteFailures = value;
    };
    /**
     * Gets the dynamicpropertyassociation_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get dynamicpropertyassociation_MailboxTrackingFolders() {
        return this._dynamicpropertyassociation_MailboxTrackingFolders;
    };
    /**
     * Sets the dynamicpropertyassociation_MailboxTrackingFolders property value. 
     * @param value Value to set for the dynamicpropertyassociation_MailboxTrackingFolders property.
     */
    public set dynamicpropertyassociation_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._dynamicpropertyassociation_MailboxTrackingFolders = value;
    };
    /**
     * Gets the dynamicpropertyassociation_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get dynamicpropertyassociation_PrincipalObjectAttributeAccesses() {
        return this._dynamicpropertyassociation_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the dynamicpropertyassociation_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the dynamicpropertyassociation_PrincipalObjectAttributeAccesses property.
     */
    public set dynamicpropertyassociation_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._dynamicpropertyassociation_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the dynamicpropertyassociation_SyncErrors property value. 
     * @returns a syncerror
     */
    public get dynamicpropertyassociation_SyncErrors() {
        return this._dynamicpropertyassociation_SyncErrors;
    };
    /**
     * Sets the dynamicpropertyassociation_SyncErrors property value. 
     * @param value Value to set for the dynamicpropertyassociation_SyncErrors property.
     */
    public set dynamicpropertyassociation_SyncErrors(value: Syncerror[] | undefined) {
        this._dynamicpropertyassociation_SyncErrors = value;
    };
    /**
     * Gets the dynamicpropertyassociationid property value. 
     * @returns a string
     */
    public get dynamicpropertyassociationid() {
        return this._dynamicpropertyassociationid;
    };
    /**
     * Sets the dynamicpropertyassociationid property value. 
     * @param value Value to set for the dynamicpropertyassociationid property.
     */
    public set dynamicpropertyassociationid(value: string | undefined) {
        this._dynamicpropertyassociationid = value;
    };
    /**
     * Gets the dynamicpropertyid property value. 
     * @returns a dynamicproperty
     */
    public get dynamicpropertyid() {
        return this._dynamicpropertyid;
    };
    /**
     * Sets the dynamicpropertyid property value. 
     * @param value Value to set for the dynamicpropertyid property.
     */
    public set dynamicpropertyid(value: Dynamicproperty | undefined) {
        this._dynamicpropertyid = value;
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
            "_createdby_value": (o, n) => { (o as unknown as Dynamicpropertyassociation)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Dynamicpropertyassociation)._createdonbehalfby_value = n.getStringValue(); },
            "_dynamicpropertyid_value": (o, n) => { (o as unknown as Dynamicpropertyassociation)._dynamicpropertyid_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Dynamicpropertyassociation)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Dynamicpropertyassociation)._modifiedonbehalfby_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Dynamicpropertyassociation)._organizationid_value = n.getStringValue(); },
            "_regardingobjectid_value": (o, n) => { (o as unknown as Dynamicpropertyassociation)._regardingobjectid_value = n.getStringValue(); },
            "_transactioncurrencyid_value": (o, n) => { (o as unknown as Dynamicpropertyassociation)._transactioncurrencyid_value = n.getStringValue(); },
            "associationstatus": (o, n) => { (o as unknown as Dynamicpropertyassociation).associationstatus = n.getNumberValue(); },
            "createdby": (o, n) => { (o as unknown as Dynamicpropertyassociation).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Dynamicpropertyassociation).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Dynamicpropertyassociation).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "dmtimportstate": (o, n) => { (o as unknown as Dynamicpropertyassociation).dmtimportstate = n.getNumberValue(); },
            "dynamicpropertyassociation_AsyncOperations": (o, n) => { (o as unknown as Dynamicpropertyassociation).dynamicpropertyassociation_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "dynamicpropertyassociation_BulkDeleteFailures": (o, n) => { (o as unknown as Dynamicpropertyassociation).dynamicpropertyassociation_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "dynamicpropertyassociation_MailboxTrackingFolders": (o, n) => { (o as unknown as Dynamicpropertyassociation).dynamicpropertyassociation_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "dynamicpropertyassociation_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Dynamicpropertyassociation).dynamicpropertyassociation_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "dynamicpropertyassociation_SyncErrors": (o, n) => { (o as unknown as Dynamicpropertyassociation).dynamicpropertyassociation_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "dynamicpropertyassociationid": (o, n) => { (o as unknown as Dynamicpropertyassociation).dynamicpropertyassociationid = n.getStringValue(); },
            "dynamicpropertyid": (o, n) => { (o as unknown as Dynamicpropertyassociation).dynamicpropertyid = n.getObjectValue<Dynamicproperty>(createDynamicpropertyFromDiscriminatorValue); },
            "exchangerate": (o, n) => { (o as unknown as Dynamicpropertyassociation).exchangerate = n.getNumberValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Dynamicpropertyassociation).importsequencenumber = n.getNumberValue(); },
            "inheritancestate": (o, n) => { (o as unknown as Dynamicpropertyassociation).inheritancestate = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Dynamicpropertyassociation).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Dynamicpropertyassociation).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Dynamicpropertyassociation).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "name": (o, n) => { (o as unknown as Dynamicpropertyassociation).name = n.getStringValue(); },
            "organizationid": (o, n) => { (o as unknown as Dynamicpropertyassociation).organizationid = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Dynamicpropertyassociation).overriddencreatedon = n.getDateValue(); },
            "regardingobjectid_product": (o, n) => { (o as unknown as Dynamicpropertyassociation).regardingobjectid_product = n.getObjectValue<Product>(createProductFromDiscriminatorValue); },
            "regardingobjectid_productassociation": (o, n) => { (o as unknown as Dynamicpropertyassociation).regardingobjectid_productassociation = n.getObjectValue<Productassociation>(createProductassociationFromDiscriminatorValue); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Dynamicpropertyassociation).timezoneruleversionnumber = n.getNumberValue(); },
            "transactioncurrencyid": (o, n) => { (o as unknown as Dynamicpropertyassociation).transactioncurrencyid = n.getObjectValue<Transactioncurrency>(createTransactioncurrencyFromDiscriminatorValue); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Dynamicpropertyassociation).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Dynamicpropertyassociation).versionnumber = n.getNumberValue(); },
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
     * Gets the inheritancestate property value. 
     * @returns a integer
     */
    public get inheritancestate() {
        return this._inheritancestate;
    };
    /**
     * Sets the inheritancestate property value. 
     * @param value Value to set for the inheritancestate property.
     */
    public set inheritancestate(value: number | undefined) {
        this._inheritancestate = value;
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
     * Gets the regardingobjectid_product property value. 
     * @returns a product
     */
    public get regardingobjectid_product() {
        return this._regardingobjectid_product;
    };
    /**
     * Sets the regardingobjectid_product property value. 
     * @param value Value to set for the regardingobjectid_product property.
     */
    public set regardingobjectid_product(value: Product | undefined) {
        this._regardingobjectid_product = value;
    };
    /**
     * Gets the regardingobjectid_productassociation property value. 
     * @returns a productassociation
     */
    public get regardingobjectid_productassociation() {
        return this._regardingobjectid_productassociation;
    };
    /**
     * Sets the regardingobjectid_productassociation property value. 
     * @param value Value to set for the regardingobjectid_productassociation property.
     */
    public set regardingobjectid_productassociation(value: Productassociation | undefined) {
        this._regardingobjectid_productassociation = value;
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
        writer.writeStringValue("_dynamicpropertyid_value", this._dynamicpropertyid_value);
        writer.writeStringValue("_modifiedby_value", this._modifiedby_value);
        writer.writeStringValue("_modifiedonbehalfby_value", this._modifiedonbehalfby_value);
        writer.writeStringValue("_organizationid_value", this._organizationid_value);
        writer.writeStringValue("_regardingobjectid_value", this._regardingobjectid_value);
        writer.writeStringValue("_transactioncurrencyid_value", this._transactioncurrencyid_value);
        writer.writeNumberValue("associationstatus", this.associationstatus);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeNumberValue("dmtimportstate", this.dmtimportstate);
        writer.writeCollectionOfObjectValues<Asyncoperation>("dynamicpropertyassociation_AsyncOperations", this.dynamicpropertyassociation_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("dynamicpropertyassociation_BulkDeleteFailures", this.dynamicpropertyassociation_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("dynamicpropertyassociation_MailboxTrackingFolders", this.dynamicpropertyassociation_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("dynamicpropertyassociation_PrincipalObjectAttributeAccesses", this.dynamicpropertyassociation_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Syncerror>("dynamicpropertyassociation_SyncErrors", this.dynamicpropertyassociation_SyncErrors);
        writer.writeStringValue("dynamicpropertyassociationid", this.dynamicpropertyassociationid);
        writer.writeObjectValue<Dynamicproperty>("dynamicpropertyid", this.dynamicpropertyid);
        writer.writeNumberValue("exchangerate", this.exchangerate);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeNumberValue("inheritancestate", this.inheritancestate);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeStringValue("name", this.name);
        writer.writeObjectValue<Organization>("organizationid", this.organizationid);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeObjectValue<Product>("regardingobjectid_product", this.regardingobjectid_product);
        writer.writeObjectValue<Productassociation>("regardingobjectid_productassociation", this.regardingobjectid_productassociation);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeObjectValue<Transactioncurrency>("transactioncurrencyid", this.transactioncurrencyid);
        writer.writeNumberValue("utcconversiontimezonecode", this.utcconversiontimezonecode);
        writer.writeNumberValue("versionnumber", this.versionnumber);
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
