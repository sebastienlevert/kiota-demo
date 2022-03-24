import {createAnnotationFromDiscriminatorValue} from './createAnnotationFromDiscriminatorValue';
import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBookableresourcecategoryFromDiscriminatorValue} from './createBookableresourcecategoryFromDiscriminatorValue';
import {createBookableresourceFromDiscriminatorValue} from './createBookableresourceFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_organizationalunitFromDiscriminatorValue} from './createMsdyn_organizationalunitFromDiscriminatorValue';
import {createMsdyn_transactioncategoryFromDiscriminatorValue} from './createMsdyn_transactioncategoryFromDiscriminatorValue';
import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {createPricelevelFromDiscriminatorValue} from './createPricelevelFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTransactioncurrencyFromDiscriminatorValue} from './createTransactioncurrencyFromDiscriminatorValue';
import {createUomFromDiscriminatorValue} from './createUomFromDiscriminatorValue';
import {createUomscheduleFromDiscriminatorValue} from './createUomscheduleFromDiscriminatorValue';
import {Annotation, Asyncoperation, Bookableresource, Bookableresourcecategory, Bulkdeletefailure, Crmbaseentity, Duplicaterecord, Mailboxtrackingfolder, Msdyn_organizationalunit, Msdyn_transactioncategory, Organization, Pricelevel, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser, Transactioncurrency, Uom, Uomschedule} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_resourcecategorypricelevel extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_bookableresource_value?: string | undefined;
    private __msdyn_organizationalunit_value?: string | undefined;
    private __msdyn_pricelist_value?: string | undefined;
    private __msdyn_primaryunit_value?: string | undefined;
    private __msdyn_resourcecategory_value?: string | undefined;
    private __msdyn_transactioncategory_value?: string | undefined;
    private __msdyn_unit_value?: string | undefined;
    private __msdyn_unitschedule_value?: string | undefined;
    private __organizationid_value?: string | undefined;
    private __transactioncurrencyid_value?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _exchangerate?: number | undefined;
    private _importsequencenumber?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _msdyn_bookableresource?: Bookableresource | undefined;
    private _msdyn_description?: string | undefined;
    private _msdyn_organizationalunit?: Msdyn_organizationalunit | undefined;
    private _msdyn_percent?: number | undefined;
    private _msdyn_price?: number | undefined;
    private _msdyn_price_base?: number | undefined;
    private _msdyn_pricecalculation?: number | undefined;
    private _msdyn_priceinprimaryunit?: number | undefined;
    private _msdyn_priceinprimaryunit_base?: number | undefined;
    private _msdyn_PriceList?: Pricelevel | undefined;
    private _msdyn_PrimaryUnit?: Uom | undefined;
    private _msdyn_ResourceCategory?: Bookableresourcecategory | undefined;
    private _msdyn_resourcecategorypricelevel_Annotations?: Annotation[] | undefined;
    private _msdyn_resourcecategorypricelevel_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_resourcecategorypricelevel_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_resourcecategorypricelevel_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_resourcecategorypricelevel_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_resourcecategorypricelevel_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_resourcecategorypricelevel_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_resourcecategorypricelevel_ProcessSession?: Processsession[] | undefined;
    private _msdyn_resourcecategorypricelevel_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_resourcecategorypricelevelid?: string | undefined;
    private _msdyn_transactioncategory?: Msdyn_transactioncategory | undefined;
    private _msdyn_Unit?: Uom | undefined;
    private _msdyn_UnitSchedule?: Uomschedule | undefined;
    private _organizationid?: Organization | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _statecode?: number | undefined;
    private _statuscode?: number | undefined;
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
     * Gets the _msdyn_bookableresource_value property value. 
     * @returns a string
     */
    public get _msdyn_bookableresource_value() {
        return this.__msdyn_bookableresource_value;
    };
    /**
     * Sets the _msdyn_bookableresource_value property value. 
     * @param value Value to set for the _msdyn_bookableresource_value property.
     */
    public set _msdyn_bookableresource_value(value: string | undefined) {
        this.__msdyn_bookableresource_value = value;
    };
    /**
     * Gets the _msdyn_organizationalunit_value property value. 
     * @returns a string
     */
    public get _msdyn_organizationalunit_value() {
        return this.__msdyn_organizationalunit_value;
    };
    /**
     * Sets the _msdyn_organizationalunit_value property value. 
     * @param value Value to set for the _msdyn_organizationalunit_value property.
     */
    public set _msdyn_organizationalunit_value(value: string | undefined) {
        this.__msdyn_organizationalunit_value = value;
    };
    /**
     * Gets the _msdyn_pricelist_value property value. 
     * @returns a string
     */
    public get _msdyn_pricelist_value() {
        return this.__msdyn_pricelist_value;
    };
    /**
     * Sets the _msdyn_pricelist_value property value. 
     * @param value Value to set for the _msdyn_pricelist_value property.
     */
    public set _msdyn_pricelist_value(value: string | undefined) {
        this.__msdyn_pricelist_value = value;
    };
    /**
     * Gets the _msdyn_primaryunit_value property value. 
     * @returns a string
     */
    public get _msdyn_primaryunit_value() {
        return this.__msdyn_primaryunit_value;
    };
    /**
     * Sets the _msdyn_primaryunit_value property value. 
     * @param value Value to set for the _msdyn_primaryunit_value property.
     */
    public set _msdyn_primaryunit_value(value: string | undefined) {
        this.__msdyn_primaryunit_value = value;
    };
    /**
     * Gets the _msdyn_resourcecategory_value property value. 
     * @returns a string
     */
    public get _msdyn_resourcecategory_value() {
        return this.__msdyn_resourcecategory_value;
    };
    /**
     * Sets the _msdyn_resourcecategory_value property value. 
     * @param value Value to set for the _msdyn_resourcecategory_value property.
     */
    public set _msdyn_resourcecategory_value(value: string | undefined) {
        this.__msdyn_resourcecategory_value = value;
    };
    /**
     * Gets the _msdyn_transactioncategory_value property value. 
     * @returns a string
     */
    public get _msdyn_transactioncategory_value() {
        return this.__msdyn_transactioncategory_value;
    };
    /**
     * Sets the _msdyn_transactioncategory_value property value. 
     * @param value Value to set for the _msdyn_transactioncategory_value property.
     */
    public set _msdyn_transactioncategory_value(value: string | undefined) {
        this.__msdyn_transactioncategory_value = value;
    };
    /**
     * Gets the _msdyn_unit_value property value. 
     * @returns a string
     */
    public get _msdyn_unit_value() {
        return this.__msdyn_unit_value;
    };
    /**
     * Sets the _msdyn_unit_value property value. 
     * @param value Value to set for the _msdyn_unit_value property.
     */
    public set _msdyn_unit_value(value: string | undefined) {
        this.__msdyn_unit_value = value;
    };
    /**
     * Gets the _msdyn_unitschedule_value property value. 
     * @returns a string
     */
    public get _msdyn_unitschedule_value() {
        return this.__msdyn_unitschedule_value;
    };
    /**
     * Sets the _msdyn_unitschedule_value property value. 
     * @param value Value to set for the _msdyn_unitschedule_value property.
     */
    public set _msdyn_unitschedule_value(value: string | undefined) {
        this.__msdyn_unitschedule_value = value;
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
     * Instantiates a new msdyn_resourcecategorypricelevel and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_resourcecategorypricelevel)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_resourcecategorypricelevel)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_resourcecategorypricelevel)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_resourcecategorypricelevel)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_bookableresource_value": (o, n) => { (o as unknown as Msdyn_resourcecategorypricelevel)._msdyn_bookableresource_value = n.getStringValue(); },
            "_msdyn_organizationalunit_value": (o, n) => { (o as unknown as Msdyn_resourcecategorypricelevel)._msdyn_organizationalunit_value = n.getStringValue(); },
            "_msdyn_pricelist_value": (o, n) => { (o as unknown as Msdyn_resourcecategorypricelevel)._msdyn_pricelist_value = n.getStringValue(); },
            "_msdyn_primaryunit_value": (o, n) => { (o as unknown as Msdyn_resourcecategorypricelevel)._msdyn_primaryunit_value = n.getStringValue(); },
            "_msdyn_resourcecategory_value": (o, n) => { (o as unknown as Msdyn_resourcecategorypricelevel)._msdyn_resourcecategory_value = n.getStringValue(); },
            "_msdyn_transactioncategory_value": (o, n) => { (o as unknown as Msdyn_resourcecategorypricelevel)._msdyn_transactioncategory_value = n.getStringValue(); },
            "_msdyn_unit_value": (o, n) => { (o as unknown as Msdyn_resourcecategorypricelevel)._msdyn_unit_value = n.getStringValue(); },
            "_msdyn_unitschedule_value": (o, n) => { (o as unknown as Msdyn_resourcecategorypricelevel)._msdyn_unitschedule_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Msdyn_resourcecategorypricelevel)._organizationid_value = n.getStringValue(); },
            "_transactioncurrencyid_value": (o, n) => { (o as unknown as Msdyn_resourcecategorypricelevel)._transactioncurrencyid_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_resourcecategorypricelevel).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_resourcecategorypricelevel).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_resourcecategorypricelevel).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "exchangerate": (o, n) => { (o as unknown as Msdyn_resourcecategorypricelevel).exchangerate = n.getNumberValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_resourcecategorypricelevel).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_resourcecategorypricelevel).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_resourcecategorypricelevel).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_resourcecategorypricelevel).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_bookableresource": (o, n) => { (o as unknown as Msdyn_resourcecategorypricelevel).msdyn_bookableresource = n.getObjectValue<Bookableresource>(createBookableresourceFromDiscriminatorValue); },
            "msdyn_description": (o, n) => { (o as unknown as Msdyn_resourcecategorypricelevel).msdyn_description = n.getStringValue(); },
            "msdyn_organizationalunit": (o, n) => { (o as unknown as Msdyn_resourcecategorypricelevel).msdyn_organizationalunit = n.getObjectValue<Msdyn_organizationalunit>(createMsdyn_organizationalunitFromDiscriminatorValue); },
            "msdyn_percent": (o, n) => { (o as unknown as Msdyn_resourcecategorypricelevel).msdyn_percent = n.getNumberValue(); },
            "msdyn_price": (o, n) => { (o as unknown as Msdyn_resourcecategorypricelevel).msdyn_price = n.getNumberValue(); },
            "msdyn_price_base": (o, n) => { (o as unknown as Msdyn_resourcecategorypricelevel).msdyn_price_base = n.getNumberValue(); },
            "msdyn_pricecalculation": (o, n) => { (o as unknown as Msdyn_resourcecategorypricelevel).msdyn_pricecalculation = n.getNumberValue(); },
            "msdyn_priceinprimaryunit": (o, n) => { (o as unknown as Msdyn_resourcecategorypricelevel).msdyn_priceinprimaryunit = n.getNumberValue(); },
            "msdyn_priceinprimaryunit_base": (o, n) => { (o as unknown as Msdyn_resourcecategorypricelevel).msdyn_priceinprimaryunit_base = n.getNumberValue(); },
            "msdyn_PriceList": (o, n) => { (o as unknown as Msdyn_resourcecategorypricelevel).msdyn_PriceList = n.getObjectValue<Pricelevel>(createPricelevelFromDiscriminatorValue); },
            "msdyn_PrimaryUnit": (o, n) => { (o as unknown as Msdyn_resourcecategorypricelevel).msdyn_PrimaryUnit = n.getObjectValue<Uom>(createUomFromDiscriminatorValue); },
            "msdyn_ResourceCategory": (o, n) => { (o as unknown as Msdyn_resourcecategorypricelevel).msdyn_ResourceCategory = n.getObjectValue<Bookableresourcecategory>(createBookableresourcecategoryFromDiscriminatorValue); },
            "msdyn_resourcecategorypricelevel_Annotations": (o, n) => { (o as unknown as Msdyn_resourcecategorypricelevel).msdyn_resourcecategorypricelevel_Annotations = n.getCollectionOfObjectValues<Annotation>(createAnnotationFromDiscriminatorValue); },
            "msdyn_resourcecategorypricelevel_AsyncOperations": (o, n) => { (o as unknown as Msdyn_resourcecategorypricelevel).msdyn_resourcecategorypricelevel_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_resourcecategorypricelevel_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_resourcecategorypricelevel).msdyn_resourcecategorypricelevel_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_resourcecategorypricelevel_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_resourcecategorypricelevel).msdyn_resourcecategorypricelevel_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_resourcecategorypricelevel_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_resourcecategorypricelevel).msdyn_resourcecategorypricelevel_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_resourcecategorypricelevel_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_resourcecategorypricelevel).msdyn_resourcecategorypricelevel_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_resourcecategorypricelevel_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_resourcecategorypricelevel).msdyn_resourcecategorypricelevel_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_resourcecategorypricelevel_ProcessSession": (o, n) => { (o as unknown as Msdyn_resourcecategorypricelevel).msdyn_resourcecategorypricelevel_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_resourcecategorypricelevel_SyncErrors": (o, n) => { (o as unknown as Msdyn_resourcecategorypricelevel).msdyn_resourcecategorypricelevel_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_resourcecategorypricelevelid": (o, n) => { (o as unknown as Msdyn_resourcecategorypricelevel).msdyn_resourcecategorypricelevelid = n.getStringValue(); },
            "msdyn_transactioncategory": (o, n) => { (o as unknown as Msdyn_resourcecategorypricelevel).msdyn_transactioncategory = n.getObjectValue<Msdyn_transactioncategory>(createMsdyn_transactioncategoryFromDiscriminatorValue); },
            "msdyn_Unit": (o, n) => { (o as unknown as Msdyn_resourcecategorypricelevel).msdyn_Unit = n.getObjectValue<Uom>(createUomFromDiscriminatorValue); },
            "msdyn_UnitSchedule": (o, n) => { (o as unknown as Msdyn_resourcecategorypricelevel).msdyn_UnitSchedule = n.getObjectValue<Uomschedule>(createUomscheduleFromDiscriminatorValue); },
            "organizationid": (o, n) => { (o as unknown as Msdyn_resourcecategorypricelevel).organizationid = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_resourcecategorypricelevel).overriddencreatedon = n.getDateValue(); },
            "statecode": (o, n) => { (o as unknown as Msdyn_resourcecategorypricelevel).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_resourcecategorypricelevel).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_resourcecategorypricelevel).timezoneruleversionnumber = n.getNumberValue(); },
            "transactioncurrencyid": (o, n) => { (o as unknown as Msdyn_resourcecategorypricelevel).transactioncurrencyid = n.getObjectValue<Transactioncurrency>(createTransactioncurrencyFromDiscriminatorValue); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_resourcecategorypricelevel).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_resourcecategorypricelevel).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_bookableresource property value. 
     * @returns a bookableresource
     */
    public get msdyn_bookableresource() {
        return this._msdyn_bookableresource;
    };
    /**
     * Sets the msdyn_bookableresource property value. 
     * @param value Value to set for the msdyn_bookableresource property.
     */
    public set msdyn_bookableresource(value: Bookableresource | undefined) {
        this._msdyn_bookableresource = value;
    };
    /**
     * Gets the msdyn_description property value. 
     * @returns a string
     */
    public get msdyn_description() {
        return this._msdyn_description;
    };
    /**
     * Sets the msdyn_description property value. 
     * @param value Value to set for the msdyn_description property.
     */
    public set msdyn_description(value: string | undefined) {
        this._msdyn_description = value;
    };
    /**
     * Gets the msdyn_organizationalunit property value. 
     * @returns a msdyn_organizationalunit
     */
    public get msdyn_organizationalunit() {
        return this._msdyn_organizationalunit;
    };
    /**
     * Sets the msdyn_organizationalunit property value. 
     * @param value Value to set for the msdyn_organizationalunit property.
     */
    public set msdyn_organizationalunit(value: Msdyn_organizationalunit | undefined) {
        this._msdyn_organizationalunit = value;
    };
    /**
     * Gets the msdyn_percent property value. 
     * @returns a int64
     */
    public get msdyn_percent() {
        return this._msdyn_percent;
    };
    /**
     * Sets the msdyn_percent property value. 
     * @param value Value to set for the msdyn_percent property.
     */
    public set msdyn_percent(value: number | undefined) {
        this._msdyn_percent = value;
    };
    /**
     * Gets the msdyn_price property value. 
     * @returns a int64
     */
    public get msdyn_price() {
        return this._msdyn_price;
    };
    /**
     * Sets the msdyn_price property value. 
     * @param value Value to set for the msdyn_price property.
     */
    public set msdyn_price(value: number | undefined) {
        this._msdyn_price = value;
    };
    /**
     * Gets the msdyn_price_base property value. 
     * @returns a int64
     */
    public get msdyn_price_base() {
        return this._msdyn_price_base;
    };
    /**
     * Sets the msdyn_price_base property value. 
     * @param value Value to set for the msdyn_price_base property.
     */
    public set msdyn_price_base(value: number | undefined) {
        this._msdyn_price_base = value;
    };
    /**
     * Gets the msdyn_pricecalculation property value. 
     * @returns a integer
     */
    public get msdyn_pricecalculation() {
        return this._msdyn_pricecalculation;
    };
    /**
     * Sets the msdyn_pricecalculation property value. 
     * @param value Value to set for the msdyn_pricecalculation property.
     */
    public set msdyn_pricecalculation(value: number | undefined) {
        this._msdyn_pricecalculation = value;
    };
    /**
     * Gets the msdyn_priceinprimaryunit property value. 
     * @returns a int64
     */
    public get msdyn_priceinprimaryunit() {
        return this._msdyn_priceinprimaryunit;
    };
    /**
     * Sets the msdyn_priceinprimaryunit property value. 
     * @param value Value to set for the msdyn_priceinprimaryunit property.
     */
    public set msdyn_priceinprimaryunit(value: number | undefined) {
        this._msdyn_priceinprimaryunit = value;
    };
    /**
     * Gets the msdyn_priceinprimaryunit_base property value. 
     * @returns a int64
     */
    public get msdyn_priceinprimaryunit_base() {
        return this._msdyn_priceinprimaryunit_base;
    };
    /**
     * Sets the msdyn_priceinprimaryunit_base property value. 
     * @param value Value to set for the msdyn_priceinprimaryunit_base property.
     */
    public set msdyn_priceinprimaryunit_base(value: number | undefined) {
        this._msdyn_priceinprimaryunit_base = value;
    };
    /**
     * Gets the msdyn_PriceList property value. 
     * @returns a pricelevel
     */
    public get msdyn_PriceList() {
        return this._msdyn_PriceList;
    };
    /**
     * Sets the msdyn_PriceList property value. 
     * @param value Value to set for the msdyn_PriceList property.
     */
    public set msdyn_PriceList(value: Pricelevel | undefined) {
        this._msdyn_PriceList = value;
    };
    /**
     * Gets the msdyn_PrimaryUnit property value. 
     * @returns a uom
     */
    public get msdyn_PrimaryUnit() {
        return this._msdyn_PrimaryUnit;
    };
    /**
     * Sets the msdyn_PrimaryUnit property value. 
     * @param value Value to set for the msdyn_PrimaryUnit property.
     */
    public set msdyn_PrimaryUnit(value: Uom | undefined) {
        this._msdyn_PrimaryUnit = value;
    };
    /**
     * Gets the msdyn_ResourceCategory property value. 
     * @returns a bookableresourcecategory
     */
    public get msdyn_ResourceCategory() {
        return this._msdyn_ResourceCategory;
    };
    /**
     * Sets the msdyn_ResourceCategory property value. 
     * @param value Value to set for the msdyn_ResourceCategory property.
     */
    public set msdyn_ResourceCategory(value: Bookableresourcecategory | undefined) {
        this._msdyn_ResourceCategory = value;
    };
    /**
     * Gets the msdyn_resourcecategorypricelevel_Annotations property value. 
     * @returns a annotation
     */
    public get msdyn_resourcecategorypricelevel_Annotations() {
        return this._msdyn_resourcecategorypricelevel_Annotations;
    };
    /**
     * Sets the msdyn_resourcecategorypricelevel_Annotations property value. 
     * @param value Value to set for the msdyn_resourcecategorypricelevel_Annotations property.
     */
    public set msdyn_resourcecategorypricelevel_Annotations(value: Annotation[] | undefined) {
        this._msdyn_resourcecategorypricelevel_Annotations = value;
    };
    /**
     * Gets the msdyn_resourcecategorypricelevel_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_resourcecategorypricelevel_AsyncOperations() {
        return this._msdyn_resourcecategorypricelevel_AsyncOperations;
    };
    /**
     * Sets the msdyn_resourcecategorypricelevel_AsyncOperations property value. 
     * @param value Value to set for the msdyn_resourcecategorypricelevel_AsyncOperations property.
     */
    public set msdyn_resourcecategorypricelevel_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_resourcecategorypricelevel_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_resourcecategorypricelevel_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_resourcecategorypricelevel_BulkDeleteFailures() {
        return this._msdyn_resourcecategorypricelevel_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_resourcecategorypricelevel_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_resourcecategorypricelevel_BulkDeleteFailures property.
     */
    public set msdyn_resourcecategorypricelevel_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_resourcecategorypricelevel_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_resourcecategorypricelevel_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_resourcecategorypricelevel_DuplicateBaseRecord() {
        return this._msdyn_resourcecategorypricelevel_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_resourcecategorypricelevel_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_resourcecategorypricelevel_DuplicateBaseRecord property.
     */
    public set msdyn_resourcecategorypricelevel_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_resourcecategorypricelevel_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_resourcecategorypricelevel_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_resourcecategorypricelevel_DuplicateMatchingRecord() {
        return this._msdyn_resourcecategorypricelevel_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_resourcecategorypricelevel_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_resourcecategorypricelevel_DuplicateMatchingRecord property.
     */
    public set msdyn_resourcecategorypricelevel_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_resourcecategorypricelevel_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_resourcecategorypricelevel_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_resourcecategorypricelevel_MailboxTrackingFolders() {
        return this._msdyn_resourcecategorypricelevel_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_resourcecategorypricelevel_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_resourcecategorypricelevel_MailboxTrackingFolders property.
     */
    public set msdyn_resourcecategorypricelevel_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_resourcecategorypricelevel_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_resourcecategorypricelevel_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_resourcecategorypricelevel_PrincipalObjectAttributeAccesses() {
        return this._msdyn_resourcecategorypricelevel_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_resourcecategorypricelevel_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_resourcecategorypricelevel_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_resourcecategorypricelevel_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_resourcecategorypricelevel_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_resourcecategorypricelevel_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_resourcecategorypricelevel_ProcessSession() {
        return this._msdyn_resourcecategorypricelevel_ProcessSession;
    };
    /**
     * Sets the msdyn_resourcecategorypricelevel_ProcessSession property value. 
     * @param value Value to set for the msdyn_resourcecategorypricelevel_ProcessSession property.
     */
    public set msdyn_resourcecategorypricelevel_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_resourcecategorypricelevel_ProcessSession = value;
    };
    /**
     * Gets the msdyn_resourcecategorypricelevel_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_resourcecategorypricelevel_SyncErrors() {
        return this._msdyn_resourcecategorypricelevel_SyncErrors;
    };
    /**
     * Sets the msdyn_resourcecategorypricelevel_SyncErrors property value. 
     * @param value Value to set for the msdyn_resourcecategorypricelevel_SyncErrors property.
     */
    public set msdyn_resourcecategorypricelevel_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_resourcecategorypricelevel_SyncErrors = value;
    };
    /**
     * Gets the msdyn_resourcecategorypricelevelid property value. 
     * @returns a string
     */
    public get msdyn_resourcecategorypricelevelid() {
        return this._msdyn_resourcecategorypricelevelid;
    };
    /**
     * Sets the msdyn_resourcecategorypricelevelid property value. 
     * @param value Value to set for the msdyn_resourcecategorypricelevelid property.
     */
    public set msdyn_resourcecategorypricelevelid(value: string | undefined) {
        this._msdyn_resourcecategorypricelevelid = value;
    };
    /**
     * Gets the msdyn_transactioncategory property value. 
     * @returns a msdyn_transactioncategory
     */
    public get msdyn_transactioncategory() {
        return this._msdyn_transactioncategory;
    };
    /**
     * Sets the msdyn_transactioncategory property value. 
     * @param value Value to set for the msdyn_transactioncategory property.
     */
    public set msdyn_transactioncategory(value: Msdyn_transactioncategory | undefined) {
        this._msdyn_transactioncategory = value;
    };
    /**
     * Gets the msdyn_Unit property value. 
     * @returns a uom
     */
    public get msdyn_Unit() {
        return this._msdyn_Unit;
    };
    /**
     * Sets the msdyn_Unit property value. 
     * @param value Value to set for the msdyn_Unit property.
     */
    public set msdyn_Unit(value: Uom | undefined) {
        this._msdyn_Unit = value;
    };
    /**
     * Gets the msdyn_UnitSchedule property value. 
     * @returns a uomschedule
     */
    public get msdyn_UnitSchedule() {
        return this._msdyn_UnitSchedule;
    };
    /**
     * Sets the msdyn_UnitSchedule property value. 
     * @param value Value to set for the msdyn_UnitSchedule property.
     */
    public set msdyn_UnitSchedule(value: Uomschedule | undefined) {
        this._msdyn_UnitSchedule = value;
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
        writer.writeStringValue("_msdyn_bookableresource_value", this._msdyn_bookableresource_value);
        writer.writeStringValue("_msdyn_organizationalunit_value", this._msdyn_organizationalunit_value);
        writer.writeStringValue("_msdyn_pricelist_value", this._msdyn_pricelist_value);
        writer.writeStringValue("_msdyn_primaryunit_value", this._msdyn_primaryunit_value);
        writer.writeStringValue("_msdyn_resourcecategory_value", this._msdyn_resourcecategory_value);
        writer.writeStringValue("_msdyn_transactioncategory_value", this._msdyn_transactioncategory_value);
        writer.writeStringValue("_msdyn_unit_value", this._msdyn_unit_value);
        writer.writeStringValue("_msdyn_unitschedule_value", this._msdyn_unitschedule_value);
        writer.writeStringValue("_organizationid_value", this._organizationid_value);
        writer.writeStringValue("_transactioncurrencyid_value", this._transactioncurrencyid_value);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeNumberValue("exchangerate", this.exchangerate);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeObjectValue<Bookableresource>("msdyn_bookableresource", this.msdyn_bookableresource);
        writer.writeStringValue("msdyn_description", this.msdyn_description);
        writer.writeObjectValue<Msdyn_organizationalunit>("msdyn_organizationalunit", this.msdyn_organizationalunit);
        writer.writeNumberValue("msdyn_percent", this.msdyn_percent);
        writer.writeNumberValue("msdyn_price", this.msdyn_price);
        writer.writeNumberValue("msdyn_price_base", this.msdyn_price_base);
        writer.writeNumberValue("msdyn_pricecalculation", this.msdyn_pricecalculation);
        writer.writeNumberValue("msdyn_priceinprimaryunit", this.msdyn_priceinprimaryunit);
        writer.writeNumberValue("msdyn_priceinprimaryunit_base", this.msdyn_priceinprimaryunit_base);
        writer.writeObjectValue<Pricelevel>("msdyn_PriceList", this.msdyn_PriceList);
        writer.writeObjectValue<Uom>("msdyn_PrimaryUnit", this.msdyn_PrimaryUnit);
        writer.writeObjectValue<Bookableresourcecategory>("msdyn_ResourceCategory", this.msdyn_ResourceCategory);
        writer.writeCollectionOfObjectValues<Annotation>("msdyn_resourcecategorypricelevel_Annotations", this.msdyn_resourcecategorypricelevel_Annotations);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_resourcecategorypricelevel_AsyncOperations", this.msdyn_resourcecategorypricelevel_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_resourcecategorypricelevel_BulkDeleteFailures", this.msdyn_resourcecategorypricelevel_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_resourcecategorypricelevel_DuplicateBaseRecord", this.msdyn_resourcecategorypricelevel_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_resourcecategorypricelevel_DuplicateMatchingRecord", this.msdyn_resourcecategorypricelevel_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_resourcecategorypricelevel_MailboxTrackingFolders", this.msdyn_resourcecategorypricelevel_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_resourcecategorypricelevel_PrincipalObjectAttributeAccesses", this.msdyn_resourcecategorypricelevel_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_resourcecategorypricelevel_ProcessSession", this.msdyn_resourcecategorypricelevel_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_resourcecategorypricelevel_SyncErrors", this.msdyn_resourcecategorypricelevel_SyncErrors);
        writer.writeStringValue("msdyn_resourcecategorypricelevelid", this.msdyn_resourcecategorypricelevelid);
        writer.writeObjectValue<Msdyn_transactioncategory>("msdyn_transactioncategory", this.msdyn_transactioncategory);
        writer.writeObjectValue<Uom>("msdyn_Unit", this.msdyn_Unit);
        writer.writeObjectValue<Uomschedule>("msdyn_UnitSchedule", this.msdyn_UnitSchedule);
        writer.writeObjectValue<Organization>("organizationid", this.organizationid);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
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
