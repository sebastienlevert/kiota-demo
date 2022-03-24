import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createContractdetailFromDiscriminatorValue} from './createContractdetailFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_actualFromDiscriminatorValue} from './createMsdyn_actualFromDiscriminatorValue';
import {createMsdyn_estimatelineFromDiscriminatorValue} from './createMsdyn_estimatelineFromDiscriminatorValue';
import {createMsdyn_expenseFromDiscriminatorValue} from './createMsdyn_expenseFromDiscriminatorValue';
import {createMsdyn_invoicelinetransactionFromDiscriminatorValue} from './createMsdyn_invoicelinetransactionFromDiscriminatorValue';
import {createMsdyn_journallineFromDiscriminatorValue} from './createMsdyn_journallineFromDiscriminatorValue';
import {createMsdyn_opportunitylinetransactionFromDiscriminatorValue} from './createMsdyn_opportunitylinetransactionFromDiscriminatorValue';
import {createMsdyn_orderlinetransactionFromDiscriminatorValue} from './createMsdyn_orderlinetransactionFromDiscriminatorValue';
import {createMsdyn_quotelinetransactionFromDiscriminatorValue} from './createMsdyn_quotelinetransactionFromDiscriminatorValue';
import {createMsdyn_resourcecategorypricelevelFromDiscriminatorValue} from './createMsdyn_resourcecategorypricelevelFromDiscriminatorValue';
import {createMsdyn_transactioncategoryFromDiscriminatorValue} from './createMsdyn_transactioncategoryFromDiscriminatorValue';
import {createMsdyn_transactioncategorypricelevelFromDiscriminatorValue} from './createMsdyn_transactioncategorypricelevelFromDiscriminatorValue';
import {createMsdyn_transactiontypeFromDiscriminatorValue} from './createMsdyn_transactiontypeFromDiscriminatorValue';
import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProductFromDiscriminatorValue} from './createProductFromDiscriminatorValue';
import {createProductpricelevelFromDiscriminatorValue} from './createProductpricelevelFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createUomFromDiscriminatorValue} from './createUomFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Contractdetail, Crmbaseentity, Mailboxtrackingfolder, Msdyn_actual, Msdyn_estimateline, Msdyn_expense, Msdyn_invoicelinetransaction, Msdyn_journalline, Msdyn_opportunitylinetransaction, Msdyn_orderlinetransaction, Msdyn_quotelinetransaction, Msdyn_resourcecategorypricelevel, Msdyn_transactioncategory, Msdyn_transactioncategorypricelevel, Msdyn_transactiontype, Organization, Principalobjectattributeaccess, Product, Productpricelevel, Syncerror, Systemuser, Uom} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Uomschedule extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdbyexternalparty_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedbyexternalparty_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __organizationid_value?: string | undefined;
    private _baseuomname?: string | undefined;
    private _contract_detail_unit_of_measure_schedule?: Contractdetail[] | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _description?: string | undefined;
    private _importsequencenumber?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _msdyn_uomschedule_msdyn_actual_UnitSchedule?: Msdyn_actual[] | undefined;
    private _msdyn_uomschedule_msdyn_estimateline_UnitSchedule?: Msdyn_estimateline[] | undefined;
    private _msdyn_uomschedule_msdyn_expense_UnitGroup?: Msdyn_expense[] | undefined;
    private _msdyn_uomschedule_msdyn_invoicelinetransaction_UnitSchedule?: Msdyn_invoicelinetransaction[] | undefined;
    private _msdyn_uomschedule_msdyn_journalline_UnitSchedule?: Msdyn_journalline[] | undefined;
    private _msdyn_uomschedule_msdyn_opportunitylinetransaction_UnitSchedule?: Msdyn_opportunitylinetransaction[] | undefined;
    private _msdyn_uomschedule_msdyn_orderlinetransaction_UnitSchedule?: Msdyn_orderlinetransaction[] | undefined;
    private _msdyn_uomschedule_msdyn_quotelinetransaction_UnitSchedule?: Msdyn_quotelinetransaction[] | undefined;
    private _msdyn_uomschedule_msdyn_resourcecategorypricelevel_UnitSchedule?: Msdyn_resourcecategorypricelevel[] | undefined;
    private _msdyn_uomschedule_msdyn_transactioncategory_UnitGroup?: Msdyn_transactioncategory[] | undefined;
    private _msdyn_uomschedule_msdyn_transactioncategorypricelevel_UnitSchedule?: Msdyn_transactioncategorypricelevel[] | undefined;
    private _msdyn_uomschedule_msdyn_transactiontype_UnitGroup?: Msdyn_transactiontype[] | undefined;
    private _name?: string | undefined;
    private _organizationid?: Organization | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _statecode?: number | undefined;
    private _statuscode?: number | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _unit_of_measure_schedule_conversions?: Uom[] | undefined;
    private _unit_of_measure_schedule_product_price_level?: Productpricelevel[] | undefined;
    private _unit_of_measurement_schedule_products?: Product[] | undefined;
    private _uoMSchedule_AsyncOperations?: Asyncoperation[] | undefined;
    private _uoMSchedule_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _uomschedule_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _uomschedule_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _uoMSchedule_SyncErrors?: Syncerror[] | undefined;
    private _uomscheduleid?: string | undefined;
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
     * Gets the _createdbyexternalparty_value property value. 
     * @returns a string
     */
    public get _createdbyexternalparty_value() {
        return this.__createdbyexternalparty_value;
    };
    /**
     * Sets the _createdbyexternalparty_value property value. 
     * @param value Value to set for the _createdbyexternalparty_value property.
     */
    public set _createdbyexternalparty_value(value: string | undefined) {
        this.__createdbyexternalparty_value = value;
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
     * Gets the _modifiedbyexternalparty_value property value. 
     * @returns a string
     */
    public get _modifiedbyexternalparty_value() {
        return this.__modifiedbyexternalparty_value;
    };
    /**
     * Sets the _modifiedbyexternalparty_value property value. 
     * @param value Value to set for the _modifiedbyexternalparty_value property.
     */
    public set _modifiedbyexternalparty_value(value: string | undefined) {
        this.__modifiedbyexternalparty_value = value;
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
     * Gets the baseuomname property value. 
     * @returns a string
     */
    public get baseuomname() {
        return this._baseuomname;
    };
    /**
     * Sets the baseuomname property value. 
     * @param value Value to set for the baseuomname property.
     */
    public set baseuomname(value: string | undefined) {
        this._baseuomname = value;
    };
    /**
     * Instantiates a new uomschedule and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the contract_detail_unit_of_measure_schedule property value. 
     * @returns a contractdetail
     */
    public get contract_detail_unit_of_measure_schedule() {
        return this._contract_detail_unit_of_measure_schedule;
    };
    /**
     * Sets the contract_detail_unit_of_measure_schedule property value. 
     * @param value Value to set for the contract_detail_unit_of_measure_schedule property.
     */
    public set contract_detail_unit_of_measure_schedule(value: Contractdetail[] | undefined) {
        this._contract_detail_unit_of_measure_schedule = value;
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
     * Gets the description property value. 
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. 
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Uomschedule)._createdby_value = n.getStringValue(); },
            "_createdbyexternalparty_value": (o, n) => { (o as unknown as Uomschedule)._createdbyexternalparty_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Uomschedule)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Uomschedule)._modifiedby_value = n.getStringValue(); },
            "_modifiedbyexternalparty_value": (o, n) => { (o as unknown as Uomschedule)._modifiedbyexternalparty_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Uomschedule)._modifiedonbehalfby_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Uomschedule)._organizationid_value = n.getStringValue(); },
            "baseuomname": (o, n) => { (o as unknown as Uomschedule).baseuomname = n.getStringValue(); },
            "contract_detail_unit_of_measure_schedule": (o, n) => { (o as unknown as Uomschedule).contract_detail_unit_of_measure_schedule = n.getCollectionOfObjectValues<Contractdetail>(createContractdetailFromDiscriminatorValue); },
            "createdby": (o, n) => { (o as unknown as Uomschedule).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Uomschedule).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Uomschedule).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "description": (o, n) => { (o as unknown as Uomschedule).description = n.getStringValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Uomschedule).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Uomschedule).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Uomschedule).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Uomschedule).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_uomschedule_msdyn_actual_UnitSchedule": (o, n) => { (o as unknown as Uomschedule).msdyn_uomschedule_msdyn_actual_UnitSchedule = n.getCollectionOfObjectValues<Msdyn_actual>(createMsdyn_actualFromDiscriminatorValue); },
            "msdyn_uomschedule_msdyn_estimateline_UnitSchedule": (o, n) => { (o as unknown as Uomschedule).msdyn_uomschedule_msdyn_estimateline_UnitSchedule = n.getCollectionOfObjectValues<Msdyn_estimateline>(createMsdyn_estimatelineFromDiscriminatorValue); },
            "msdyn_uomschedule_msdyn_expense_UnitGroup": (o, n) => { (o as unknown as Uomschedule).msdyn_uomschedule_msdyn_expense_UnitGroup = n.getCollectionOfObjectValues<Msdyn_expense>(createMsdyn_expenseFromDiscriminatorValue); },
            "msdyn_uomschedule_msdyn_invoicelinetransaction_UnitSchedule": (o, n) => { (o as unknown as Uomschedule).msdyn_uomschedule_msdyn_invoicelinetransaction_UnitSchedule = n.getCollectionOfObjectValues<Msdyn_invoicelinetransaction>(createMsdyn_invoicelinetransactionFromDiscriminatorValue); },
            "msdyn_uomschedule_msdyn_journalline_UnitSchedule": (o, n) => { (o as unknown as Uomschedule).msdyn_uomschedule_msdyn_journalline_UnitSchedule = n.getCollectionOfObjectValues<Msdyn_journalline>(createMsdyn_journallineFromDiscriminatorValue); },
            "msdyn_uomschedule_msdyn_opportunitylinetransaction_UnitSchedule": (o, n) => { (o as unknown as Uomschedule).msdyn_uomschedule_msdyn_opportunitylinetransaction_UnitSchedule = n.getCollectionOfObjectValues<Msdyn_opportunitylinetransaction>(createMsdyn_opportunitylinetransactionFromDiscriminatorValue); },
            "msdyn_uomschedule_msdyn_orderlinetransaction_UnitSchedule": (o, n) => { (o as unknown as Uomschedule).msdyn_uomschedule_msdyn_orderlinetransaction_UnitSchedule = n.getCollectionOfObjectValues<Msdyn_orderlinetransaction>(createMsdyn_orderlinetransactionFromDiscriminatorValue); },
            "msdyn_uomschedule_msdyn_quotelinetransaction_UnitSchedule": (o, n) => { (o as unknown as Uomschedule).msdyn_uomschedule_msdyn_quotelinetransaction_UnitSchedule = n.getCollectionOfObjectValues<Msdyn_quotelinetransaction>(createMsdyn_quotelinetransactionFromDiscriminatorValue); },
            "msdyn_uomschedule_msdyn_resourcecategorypricelevel_UnitSchedule": (o, n) => { (o as unknown as Uomschedule).msdyn_uomschedule_msdyn_resourcecategorypricelevel_UnitSchedule = n.getCollectionOfObjectValues<Msdyn_resourcecategorypricelevel>(createMsdyn_resourcecategorypricelevelFromDiscriminatorValue); },
            "msdyn_uomschedule_msdyn_transactioncategory_UnitGroup": (o, n) => { (o as unknown as Uomschedule).msdyn_uomschedule_msdyn_transactioncategory_UnitGroup = n.getCollectionOfObjectValues<Msdyn_transactioncategory>(createMsdyn_transactioncategoryFromDiscriminatorValue); },
            "msdyn_uomschedule_msdyn_transactioncategorypricelevel_UnitSchedule": (o, n) => { (o as unknown as Uomschedule).msdyn_uomschedule_msdyn_transactioncategorypricelevel_UnitSchedule = n.getCollectionOfObjectValues<Msdyn_transactioncategorypricelevel>(createMsdyn_transactioncategorypricelevelFromDiscriminatorValue); },
            "msdyn_uomschedule_msdyn_transactiontype_UnitGroup": (o, n) => { (o as unknown as Uomschedule).msdyn_uomschedule_msdyn_transactiontype_UnitGroup = n.getCollectionOfObjectValues<Msdyn_transactiontype>(createMsdyn_transactiontypeFromDiscriminatorValue); },
            "name": (o, n) => { (o as unknown as Uomschedule).name = n.getStringValue(); },
            "organizationid": (o, n) => { (o as unknown as Uomschedule).organizationid = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Uomschedule).overriddencreatedon = n.getDateValue(); },
            "statecode": (o, n) => { (o as unknown as Uomschedule).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Uomschedule).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Uomschedule).timezoneruleversionnumber = n.getNumberValue(); },
            "unit_of_measure_schedule_conversions": (o, n) => { (o as unknown as Uomschedule).unit_of_measure_schedule_conversions = n.getCollectionOfObjectValues<Uom>(createUomFromDiscriminatorValue); },
            "unit_of_measure_schedule_product_price_level": (o, n) => { (o as unknown as Uomschedule).unit_of_measure_schedule_product_price_level = n.getCollectionOfObjectValues<Productpricelevel>(createProductpricelevelFromDiscriminatorValue); },
            "unit_of_measurement_schedule_products": (o, n) => { (o as unknown as Uomschedule).unit_of_measurement_schedule_products = n.getCollectionOfObjectValues<Product>(createProductFromDiscriminatorValue); },
            "uoMSchedule_AsyncOperations": (o, n) => { (o as unknown as Uomschedule).uoMSchedule_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "uoMSchedule_BulkDeleteFailures": (o, n) => { (o as unknown as Uomschedule).uoMSchedule_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "uomschedule_MailboxTrackingFolders": (o, n) => { (o as unknown as Uomschedule).uomschedule_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "uomschedule_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Uomschedule).uomschedule_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "uoMSchedule_SyncErrors": (o, n) => { (o as unknown as Uomschedule).uoMSchedule_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "uomscheduleid": (o, n) => { (o as unknown as Uomschedule).uomscheduleid = n.getStringValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Uomschedule).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Uomschedule).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_uomschedule_msdyn_actual_UnitSchedule property value. 
     * @returns a msdyn_actual
     */
    public get msdyn_uomschedule_msdyn_actual_UnitSchedule() {
        return this._msdyn_uomschedule_msdyn_actual_UnitSchedule;
    };
    /**
     * Sets the msdyn_uomschedule_msdyn_actual_UnitSchedule property value. 
     * @param value Value to set for the msdyn_uomschedule_msdyn_actual_UnitSchedule property.
     */
    public set msdyn_uomschedule_msdyn_actual_UnitSchedule(value: Msdyn_actual[] | undefined) {
        this._msdyn_uomschedule_msdyn_actual_UnitSchedule = value;
    };
    /**
     * Gets the msdyn_uomschedule_msdyn_estimateline_UnitSchedule property value. 
     * @returns a msdyn_estimateline
     */
    public get msdyn_uomschedule_msdyn_estimateline_UnitSchedule() {
        return this._msdyn_uomschedule_msdyn_estimateline_UnitSchedule;
    };
    /**
     * Sets the msdyn_uomschedule_msdyn_estimateline_UnitSchedule property value. 
     * @param value Value to set for the msdyn_uomschedule_msdyn_estimateline_UnitSchedule property.
     */
    public set msdyn_uomschedule_msdyn_estimateline_UnitSchedule(value: Msdyn_estimateline[] | undefined) {
        this._msdyn_uomschedule_msdyn_estimateline_UnitSchedule = value;
    };
    /**
     * Gets the msdyn_uomschedule_msdyn_expense_UnitGroup property value. 
     * @returns a msdyn_expense
     */
    public get msdyn_uomschedule_msdyn_expense_UnitGroup() {
        return this._msdyn_uomschedule_msdyn_expense_UnitGroup;
    };
    /**
     * Sets the msdyn_uomschedule_msdyn_expense_UnitGroup property value. 
     * @param value Value to set for the msdyn_uomschedule_msdyn_expense_UnitGroup property.
     */
    public set msdyn_uomschedule_msdyn_expense_UnitGroup(value: Msdyn_expense[] | undefined) {
        this._msdyn_uomschedule_msdyn_expense_UnitGroup = value;
    };
    /**
     * Gets the msdyn_uomschedule_msdyn_invoicelinetransaction_UnitSchedule property value. 
     * @returns a msdyn_invoicelinetransaction
     */
    public get msdyn_uomschedule_msdyn_invoicelinetransaction_UnitSchedule() {
        return this._msdyn_uomschedule_msdyn_invoicelinetransaction_UnitSchedule;
    };
    /**
     * Sets the msdyn_uomschedule_msdyn_invoicelinetransaction_UnitSchedule property value. 
     * @param value Value to set for the msdyn_uomschedule_msdyn_invoicelinetransaction_UnitSchedule property.
     */
    public set msdyn_uomschedule_msdyn_invoicelinetransaction_UnitSchedule(value: Msdyn_invoicelinetransaction[] | undefined) {
        this._msdyn_uomschedule_msdyn_invoicelinetransaction_UnitSchedule = value;
    };
    /**
     * Gets the msdyn_uomschedule_msdyn_journalline_UnitSchedule property value. 
     * @returns a msdyn_journalline
     */
    public get msdyn_uomschedule_msdyn_journalline_UnitSchedule() {
        return this._msdyn_uomschedule_msdyn_journalline_UnitSchedule;
    };
    /**
     * Sets the msdyn_uomschedule_msdyn_journalline_UnitSchedule property value. 
     * @param value Value to set for the msdyn_uomschedule_msdyn_journalline_UnitSchedule property.
     */
    public set msdyn_uomschedule_msdyn_journalline_UnitSchedule(value: Msdyn_journalline[] | undefined) {
        this._msdyn_uomschedule_msdyn_journalline_UnitSchedule = value;
    };
    /**
     * Gets the msdyn_uomschedule_msdyn_opportunitylinetransaction_UnitSchedule property value. 
     * @returns a msdyn_opportunitylinetransaction
     */
    public get msdyn_uomschedule_msdyn_opportunitylinetransaction_UnitSchedule() {
        return this._msdyn_uomschedule_msdyn_opportunitylinetransaction_UnitSchedule;
    };
    /**
     * Sets the msdyn_uomschedule_msdyn_opportunitylinetransaction_UnitSchedule property value. 
     * @param value Value to set for the msdyn_uomschedule_msdyn_opportunitylinetransaction_UnitSchedule property.
     */
    public set msdyn_uomschedule_msdyn_opportunitylinetransaction_UnitSchedule(value: Msdyn_opportunitylinetransaction[] | undefined) {
        this._msdyn_uomschedule_msdyn_opportunitylinetransaction_UnitSchedule = value;
    };
    /**
     * Gets the msdyn_uomschedule_msdyn_orderlinetransaction_UnitSchedule property value. 
     * @returns a msdyn_orderlinetransaction
     */
    public get msdyn_uomschedule_msdyn_orderlinetransaction_UnitSchedule() {
        return this._msdyn_uomschedule_msdyn_orderlinetransaction_UnitSchedule;
    };
    /**
     * Sets the msdyn_uomschedule_msdyn_orderlinetransaction_UnitSchedule property value. 
     * @param value Value to set for the msdyn_uomschedule_msdyn_orderlinetransaction_UnitSchedule property.
     */
    public set msdyn_uomschedule_msdyn_orderlinetransaction_UnitSchedule(value: Msdyn_orderlinetransaction[] | undefined) {
        this._msdyn_uomschedule_msdyn_orderlinetransaction_UnitSchedule = value;
    };
    /**
     * Gets the msdyn_uomschedule_msdyn_quotelinetransaction_UnitSchedule property value. 
     * @returns a msdyn_quotelinetransaction
     */
    public get msdyn_uomschedule_msdyn_quotelinetransaction_UnitSchedule() {
        return this._msdyn_uomschedule_msdyn_quotelinetransaction_UnitSchedule;
    };
    /**
     * Sets the msdyn_uomschedule_msdyn_quotelinetransaction_UnitSchedule property value. 
     * @param value Value to set for the msdyn_uomschedule_msdyn_quotelinetransaction_UnitSchedule property.
     */
    public set msdyn_uomschedule_msdyn_quotelinetransaction_UnitSchedule(value: Msdyn_quotelinetransaction[] | undefined) {
        this._msdyn_uomschedule_msdyn_quotelinetransaction_UnitSchedule = value;
    };
    /**
     * Gets the msdyn_uomschedule_msdyn_resourcecategorypricelevel_UnitSchedule property value. 
     * @returns a msdyn_resourcecategorypricelevel
     */
    public get msdyn_uomschedule_msdyn_resourcecategorypricelevel_UnitSchedule() {
        return this._msdyn_uomschedule_msdyn_resourcecategorypricelevel_UnitSchedule;
    };
    /**
     * Sets the msdyn_uomschedule_msdyn_resourcecategorypricelevel_UnitSchedule property value. 
     * @param value Value to set for the msdyn_uomschedule_msdyn_resourcecategorypricelevel_UnitSchedule property.
     */
    public set msdyn_uomschedule_msdyn_resourcecategorypricelevel_UnitSchedule(value: Msdyn_resourcecategorypricelevel[] | undefined) {
        this._msdyn_uomschedule_msdyn_resourcecategorypricelevel_UnitSchedule = value;
    };
    /**
     * Gets the msdyn_uomschedule_msdyn_transactioncategory_UnitGroup property value. 
     * @returns a msdyn_transactioncategory
     */
    public get msdyn_uomschedule_msdyn_transactioncategory_UnitGroup() {
        return this._msdyn_uomschedule_msdyn_transactioncategory_UnitGroup;
    };
    /**
     * Sets the msdyn_uomschedule_msdyn_transactioncategory_UnitGroup property value. 
     * @param value Value to set for the msdyn_uomschedule_msdyn_transactioncategory_UnitGroup property.
     */
    public set msdyn_uomschedule_msdyn_transactioncategory_UnitGroup(value: Msdyn_transactioncategory[] | undefined) {
        this._msdyn_uomschedule_msdyn_transactioncategory_UnitGroup = value;
    };
    /**
     * Gets the msdyn_uomschedule_msdyn_transactioncategorypricelevel_UnitSchedule property value. 
     * @returns a msdyn_transactioncategorypricelevel
     */
    public get msdyn_uomschedule_msdyn_transactioncategorypricelevel_UnitSchedule() {
        return this._msdyn_uomschedule_msdyn_transactioncategorypricelevel_UnitSchedule;
    };
    /**
     * Sets the msdyn_uomschedule_msdyn_transactioncategorypricelevel_UnitSchedule property value. 
     * @param value Value to set for the msdyn_uomschedule_msdyn_transactioncategorypricelevel_UnitSchedule property.
     */
    public set msdyn_uomschedule_msdyn_transactioncategorypricelevel_UnitSchedule(value: Msdyn_transactioncategorypricelevel[] | undefined) {
        this._msdyn_uomschedule_msdyn_transactioncategorypricelevel_UnitSchedule = value;
    };
    /**
     * Gets the msdyn_uomschedule_msdyn_transactiontype_UnitGroup property value. 
     * @returns a msdyn_transactiontype
     */
    public get msdyn_uomschedule_msdyn_transactiontype_UnitGroup() {
        return this._msdyn_uomschedule_msdyn_transactiontype_UnitGroup;
    };
    /**
     * Sets the msdyn_uomschedule_msdyn_transactiontype_UnitGroup property value. 
     * @param value Value to set for the msdyn_uomschedule_msdyn_transactiontype_UnitGroup property.
     */
    public set msdyn_uomschedule_msdyn_transactiontype_UnitGroup(value: Msdyn_transactiontype[] | undefined) {
        this._msdyn_uomschedule_msdyn_transactiontype_UnitGroup = value;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("_createdby_value", this._createdby_value);
        writer.writeStringValue("_createdbyexternalparty_value", this._createdbyexternalparty_value);
        writer.writeStringValue("_createdonbehalfby_value", this._createdonbehalfby_value);
        writer.writeStringValue("_modifiedby_value", this._modifiedby_value);
        writer.writeStringValue("_modifiedbyexternalparty_value", this._modifiedbyexternalparty_value);
        writer.writeStringValue("_modifiedonbehalfby_value", this._modifiedonbehalfby_value);
        writer.writeStringValue("_organizationid_value", this._organizationid_value);
        writer.writeStringValue("baseuomname", this.baseuomname);
        writer.writeCollectionOfObjectValues<Contractdetail>("contract_detail_unit_of_measure_schedule", this.contract_detail_unit_of_measure_schedule);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeStringValue("description", this.description);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeCollectionOfObjectValues<Msdyn_actual>("msdyn_uomschedule_msdyn_actual_UnitSchedule", this.msdyn_uomschedule_msdyn_actual_UnitSchedule);
        writer.writeCollectionOfObjectValues<Msdyn_estimateline>("msdyn_uomschedule_msdyn_estimateline_UnitSchedule", this.msdyn_uomschedule_msdyn_estimateline_UnitSchedule);
        writer.writeCollectionOfObjectValues<Msdyn_expense>("msdyn_uomschedule_msdyn_expense_UnitGroup", this.msdyn_uomschedule_msdyn_expense_UnitGroup);
        writer.writeCollectionOfObjectValues<Msdyn_invoicelinetransaction>("msdyn_uomschedule_msdyn_invoicelinetransaction_UnitSchedule", this.msdyn_uomschedule_msdyn_invoicelinetransaction_UnitSchedule);
        writer.writeCollectionOfObjectValues<Msdyn_journalline>("msdyn_uomschedule_msdyn_journalline_UnitSchedule", this.msdyn_uomschedule_msdyn_journalline_UnitSchedule);
        writer.writeCollectionOfObjectValues<Msdyn_opportunitylinetransaction>("msdyn_uomschedule_msdyn_opportunitylinetransaction_UnitSchedule", this.msdyn_uomschedule_msdyn_opportunitylinetransaction_UnitSchedule);
        writer.writeCollectionOfObjectValues<Msdyn_orderlinetransaction>("msdyn_uomschedule_msdyn_orderlinetransaction_UnitSchedule", this.msdyn_uomschedule_msdyn_orderlinetransaction_UnitSchedule);
        writer.writeCollectionOfObjectValues<Msdyn_quotelinetransaction>("msdyn_uomschedule_msdyn_quotelinetransaction_UnitSchedule", this.msdyn_uomschedule_msdyn_quotelinetransaction_UnitSchedule);
        writer.writeCollectionOfObjectValues<Msdyn_resourcecategorypricelevel>("msdyn_uomschedule_msdyn_resourcecategorypricelevel_UnitSchedule", this.msdyn_uomschedule_msdyn_resourcecategorypricelevel_UnitSchedule);
        writer.writeCollectionOfObjectValues<Msdyn_transactioncategory>("msdyn_uomschedule_msdyn_transactioncategory_UnitGroup", this.msdyn_uomschedule_msdyn_transactioncategory_UnitGroup);
        writer.writeCollectionOfObjectValues<Msdyn_transactioncategorypricelevel>("msdyn_uomschedule_msdyn_transactioncategorypricelevel_UnitSchedule", this.msdyn_uomschedule_msdyn_transactioncategorypricelevel_UnitSchedule);
        writer.writeCollectionOfObjectValues<Msdyn_transactiontype>("msdyn_uomschedule_msdyn_transactiontype_UnitGroup", this.msdyn_uomschedule_msdyn_transactiontype_UnitGroup);
        writer.writeStringValue("name", this.name);
        writer.writeObjectValue<Organization>("organizationid", this.organizationid);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeCollectionOfObjectValues<Uom>("unit_of_measure_schedule_conversions", this.unit_of_measure_schedule_conversions);
        writer.writeCollectionOfObjectValues<Productpricelevel>("unit_of_measure_schedule_product_price_level", this.unit_of_measure_schedule_product_price_level);
        writer.writeCollectionOfObjectValues<Product>("unit_of_measurement_schedule_products", this.unit_of_measurement_schedule_products);
        writer.writeCollectionOfObjectValues<Asyncoperation>("uoMSchedule_AsyncOperations", this.uoMSchedule_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("uoMSchedule_BulkDeleteFailures", this.uoMSchedule_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("uomschedule_MailboxTrackingFolders", this.uomschedule_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("uomschedule_PrincipalObjectAttributeAccesses", this.uomschedule_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Syncerror>("uoMSchedule_SyncErrors", this.uoMSchedule_SyncErrors);
        writer.writeStringValue("uomscheduleid", this.uomscheduleid);
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
     * Gets the unit_of_measure_schedule_conversions property value. 
     * @returns a uom
     */
    public get unit_of_measure_schedule_conversions() {
        return this._unit_of_measure_schedule_conversions;
    };
    /**
     * Sets the unit_of_measure_schedule_conversions property value. 
     * @param value Value to set for the unit_of_measure_schedule_conversions property.
     */
    public set unit_of_measure_schedule_conversions(value: Uom[] | undefined) {
        this._unit_of_measure_schedule_conversions = value;
    };
    /**
     * Gets the unit_of_measure_schedule_product_price_level property value. 
     * @returns a productpricelevel
     */
    public get unit_of_measure_schedule_product_price_level() {
        return this._unit_of_measure_schedule_product_price_level;
    };
    /**
     * Sets the unit_of_measure_schedule_product_price_level property value. 
     * @param value Value to set for the unit_of_measure_schedule_product_price_level property.
     */
    public set unit_of_measure_schedule_product_price_level(value: Productpricelevel[] | undefined) {
        this._unit_of_measure_schedule_product_price_level = value;
    };
    /**
     * Gets the unit_of_measurement_schedule_products property value. 
     * @returns a product
     */
    public get unit_of_measurement_schedule_products() {
        return this._unit_of_measurement_schedule_products;
    };
    /**
     * Sets the unit_of_measurement_schedule_products property value. 
     * @param value Value to set for the unit_of_measurement_schedule_products property.
     */
    public set unit_of_measurement_schedule_products(value: Product[] | undefined) {
        this._unit_of_measurement_schedule_products = value;
    };
    /**
     * Gets the uoMSchedule_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get uoMSchedule_AsyncOperations() {
        return this._uoMSchedule_AsyncOperations;
    };
    /**
     * Sets the uoMSchedule_AsyncOperations property value. 
     * @param value Value to set for the UoMSchedule_AsyncOperations property.
     */
    public set uoMSchedule_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._uoMSchedule_AsyncOperations = value;
    };
    /**
     * Gets the uoMSchedule_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get uoMSchedule_BulkDeleteFailures() {
        return this._uoMSchedule_BulkDeleteFailures;
    };
    /**
     * Sets the uoMSchedule_BulkDeleteFailures property value. 
     * @param value Value to set for the UoMSchedule_BulkDeleteFailures property.
     */
    public set uoMSchedule_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._uoMSchedule_BulkDeleteFailures = value;
    };
    /**
     * Gets the uomschedule_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get uomschedule_MailboxTrackingFolders() {
        return this._uomschedule_MailboxTrackingFolders;
    };
    /**
     * Sets the uomschedule_MailboxTrackingFolders property value. 
     * @param value Value to set for the uomschedule_MailboxTrackingFolders property.
     */
    public set uomschedule_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._uomschedule_MailboxTrackingFolders = value;
    };
    /**
     * Gets the uomschedule_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get uomschedule_PrincipalObjectAttributeAccesses() {
        return this._uomschedule_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the uomschedule_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the uomschedule_PrincipalObjectAttributeAccesses property.
     */
    public set uomschedule_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._uomschedule_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the uoMSchedule_SyncErrors property value. 
     * @returns a syncerror
     */
    public get uoMSchedule_SyncErrors() {
        return this._uoMSchedule_SyncErrors;
    };
    /**
     * Sets the uoMSchedule_SyncErrors property value. 
     * @param value Value to set for the UoMSchedule_SyncErrors property.
     */
    public set uoMSchedule_SyncErrors(value: Syncerror[] | undefined) {
        this._uoMSchedule_SyncErrors = value;
    };
    /**
     * Gets the uomscheduleid property value. 
     * @returns a string
     */
    public get uomscheduleid() {
        return this._uomscheduleid;
    };
    /**
     * Sets the uomscheduleid property value. 
     * @param value Value to set for the uomscheduleid property.
     */
    public set uomscheduleid(value: string | undefined) {
        this._uomscheduleid = value;
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
