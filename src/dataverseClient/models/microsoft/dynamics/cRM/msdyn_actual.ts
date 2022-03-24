import {createAccountFromDiscriminatorValue} from './createAccountFromDiscriminatorValue';
import {createAnnotationFromDiscriminatorValue} from './createAnnotationFromDiscriminatorValue';
import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBookableresourcecategoryFromDiscriminatorValue} from './createBookableresourcecategoryFromDiscriminatorValue';
import {createBookableresourceFromDiscriminatorValue} from './createBookableresourceFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createContactFromDiscriminatorValue} from './createContactFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createInvoiceFromDiscriminatorValue} from './createInvoiceFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_agreementFromDiscriminatorValue} from './createMsdyn_agreementFromDiscriminatorValue';
import {createMsdyn_incidenttypeFromDiscriminatorValue} from './createMsdyn_incidenttypeFromDiscriminatorValue';
import {createMsdyn_organizationalunitFromDiscriminatorValue} from './createMsdyn_organizationalunitFromDiscriminatorValue';
import {createMsdyn_projectFromDiscriminatorValue} from './createMsdyn_projectFromDiscriminatorValue';
import {createMsdyn_projecttaskFromDiscriminatorValue} from './createMsdyn_projecttaskFromDiscriminatorValue';
import {createMsdyn_taxcodeFromDiscriminatorValue} from './createMsdyn_taxcodeFromDiscriminatorValue';
import {createMsdyn_transactioncategoryFromDiscriminatorValue} from './createMsdyn_transactioncategoryFromDiscriminatorValue';
import {createMsdyn_warehouseFromDiscriminatorValue} from './createMsdyn_warehouseFromDiscriminatorValue';
import {createMsdyn_workorderFromDiscriminatorValue} from './createMsdyn_workorderFromDiscriminatorValue';
import {createMsdyn_workordertypeFromDiscriminatorValue} from './createMsdyn_workordertypeFromDiscriminatorValue';
import {createPricelevelFromDiscriminatorValue} from './createPricelevelFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createProductFromDiscriminatorValue} from './createProductFromDiscriminatorValue';
import {createSalesorderdetailFromDiscriminatorValue} from './createSalesorderdetailFromDiscriminatorValue';
import {createSalesorderFromDiscriminatorValue} from './createSalesorderFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {createTerritoryFromDiscriminatorValue} from './createTerritoryFromDiscriminatorValue';
import {createTransactioncurrencyFromDiscriminatorValue} from './createTransactioncurrencyFromDiscriminatorValue';
import {createUomFromDiscriminatorValue} from './createUomFromDiscriminatorValue';
import {createUomscheduleFromDiscriminatorValue} from './createUomscheduleFromDiscriminatorValue';
import {Account, Annotation, Asyncoperation, Bookableresource, Bookableresourcecategory, Bulkdeletefailure, Businessunit, Contact, Crmbaseentity, Duplicaterecord, Invoice, Mailboxtrackingfolder, Msdyn_agreement, Msdyn_incidenttype, Msdyn_organizationalunit, Msdyn_project, Msdyn_projecttask, Msdyn_taxcode, Msdyn_transactioncategory, Msdyn_warehouse, Msdyn_workorder, Msdyn_workordertype, Pricelevel, Principal, Principalobjectattributeaccess, Processsession, Product, Salesorder, Salesorderdetail, Syncerror, Systemuser, Team, Territory, Transactioncurrency, Uom, Uomschedule} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_actual extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_accountcustomer_value?: string | undefined;
    private __msdyn_accountvendor_value?: string | undefined;
    private __msdyn_agreement_value?: string | undefined;
    private __msdyn_bookableresource_value?: string | undefined;
    private __msdyn_contactcustomer_value?: string | undefined;
    private __msdyn_contactvendor_value?: string | undefined;
    private __msdyn_contractorganizationalunitid_value?: string | undefined;
    private __msdyn_incidenttype_value?: string | undefined;
    private __msdyn_invoice_value?: string | undefined;
    private __msdyn_pricelist_value?: string | undefined;
    private __msdyn_product_value?: string | undefined;
    private __msdyn_project_value?: string | undefined;
    private __msdyn_resourcecategory_value?: string | undefined;
    private __msdyn_resourceorganizationalunitid_value?: string | undefined;
    private __msdyn_salescontract_value?: string | undefined;
    private __msdyn_salescontractlineid_value?: string | undefined;
    private __msdyn_serviceaccount_value?: string | undefined;
    private __msdyn_serviceterritory_value?: string | undefined;
    private __msdyn_task_value?: string | undefined;
    private __msdyn_taxcode_value?: string | undefined;
    private __msdyn_transactioncategory_value?: string | undefined;
    private __msdyn_unit_value?: string | undefined;
    private __msdyn_unitschedule_value?: string | undefined;
    private __msdyn_warehouse_value?: string | undefined;
    private __msdyn_workorder_value?: string | undefined;
    private __msdyn_workordertype_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private __owningbusinessunit_value?: string | undefined;
    private __owningteam_value?: string | undefined;
    private __owninguser_value?: string | undefined;
    private __transactioncurrencyid_value?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _exchangerate?: number | undefined;
    private _importsequencenumber?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _msdyn_AccountCustomer?: Account | undefined;
    private _msdyn_accountingdate?: Date | undefined;
    private _msdyn_AccountVendor?: Account | undefined;
    private _msdyn_actual_Annotations?: Annotation[] | undefined;
    private _msdyn_actual_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_actual_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_actual_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_actual_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_actual_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_actual_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_actual_ProcessSession?: Processsession[] | undefined;
    private _msdyn_actual_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_actualid?: string | undefined;
    private _msdyn_adjustmentstatus?: number | undefined;
    private _msdyn_Agreement?: Msdyn_agreement | undefined;
    private _msdyn_amount?: number | undefined;
    private _msdyn_amount_base?: number | undefined;
    private _msdyn_amountmethod?: number | undefined;
    private _msdyn_basisamount?: number | undefined;
    private _msdyn_basisamount_base?: number | undefined;
    private _msdyn_basisprice?: number | undefined;
    private _msdyn_basisprice_base?: number | undefined;
    private _msdyn_basisquantity?: number | undefined;
    private _msdyn_billingstatus?: number | undefined;
    private _msdyn_billingtype?: number | undefined;
    private _msdyn_bookableresource?: Bookableresource | undefined;
    private _msdyn_ContactCustomer?: Contact | undefined;
    private _msdyn_ContactVendor?: Contact | undefined;
    private _msdyn_contractorganizationalunitid?: Msdyn_organizationalunit | undefined;
    private _msdyn_customertype?: number | undefined;
    private _msdyn_description?: string | undefined;
    private _msdyn_documentdate?: Date | undefined;
    private _msdyn_enddatetime?: Date | undefined;
    private _msdyn_exchangeratedate?: Date | undefined;
    private _msdyn_externaldescription?: string | undefined;
    private _msdyn_externalreferencedate?: Date | undefined;
    private _msdyn_externalreferenceid?: string | undefined;
    private _msdyn_IncidentType?: Msdyn_incidenttype | undefined;
    private _msdyn_Invoice?: Invoice | undefined;
    private _msdyn_isjournalized?: boolean | undefined;
    private _msdyn_journaltype?: number | undefined;
    private _msdyn_percent?: number | undefined;
    private _msdyn_price?: number | undefined;
    private _msdyn_price_base?: number | undefined;
    private _msdyn_PriceList?: Pricelevel | undefined;
    private _msdyn_Product?: Product | undefined;
    private _msdyn_producttype?: number | undefined;
    private _msdyn_Project?: Msdyn_project | undefined;
    private _msdyn_quantity?: number | undefined;
    private _msdyn_ResourceCategory?: Bookableresourcecategory | undefined;
    private _msdyn_ResourceOrganizationalUnitId?: Msdyn_organizationalunit | undefined;
    private _msdyn_SalesContract?: Salesorder | undefined;
    private _msdyn_salescontractline?: string | undefined;
    private _msdyn_SalesContractLineId?: Salesorderdetail | undefined;
    private _msdyn_ServiceAccount?: Account | undefined;
    private _msdyn_ServiceTerritory?: Territory | undefined;
    private _msdyn_startdatetime?: Date | undefined;
    private _msdyn_Task?: Msdyn_projecttask | undefined;
    private _msdyn_TaxCode?: Msdyn_taxcode | undefined;
    private _msdyn_TransactionCategory?: Msdyn_transactioncategory | undefined;
    private _msdyn_transactionclassification?: number | undefined;
    private _msdyn_transactiontypecode?: number | undefined;
    private _msdyn_Unit?: Uom | undefined;
    private _msdyn_UnitSchedule?: Uomschedule | undefined;
    private _msdyn_vendortype?: number | undefined;
    private _msdyn_Warehouse?: Msdyn_warehouse | undefined;
    private _msdyn_worklocation?: number | undefined;
    private _msdyn_WorkOrder?: Msdyn_workorder | undefined;
    private _msdyn_WorkOrderType?: Msdyn_workordertype | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _ownerid?: Principal | undefined;
    private _owningbusinessunit?: Businessunit | undefined;
    private _owningteam?: Team | undefined;
    private _owninguser?: Systemuser | undefined;
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
     * Gets the _msdyn_accountcustomer_value property value. 
     * @returns a string
     */
    public get _msdyn_accountcustomer_value() {
        return this.__msdyn_accountcustomer_value;
    };
    /**
     * Sets the _msdyn_accountcustomer_value property value. 
     * @param value Value to set for the _msdyn_accountcustomer_value property.
     */
    public set _msdyn_accountcustomer_value(value: string | undefined) {
        this.__msdyn_accountcustomer_value = value;
    };
    /**
     * Gets the _msdyn_accountvendor_value property value. 
     * @returns a string
     */
    public get _msdyn_accountvendor_value() {
        return this.__msdyn_accountvendor_value;
    };
    /**
     * Sets the _msdyn_accountvendor_value property value. 
     * @param value Value to set for the _msdyn_accountvendor_value property.
     */
    public set _msdyn_accountvendor_value(value: string | undefined) {
        this.__msdyn_accountvendor_value = value;
    };
    /**
     * Gets the _msdyn_agreement_value property value. 
     * @returns a string
     */
    public get _msdyn_agreement_value() {
        return this.__msdyn_agreement_value;
    };
    /**
     * Sets the _msdyn_agreement_value property value. 
     * @param value Value to set for the _msdyn_agreement_value property.
     */
    public set _msdyn_agreement_value(value: string | undefined) {
        this.__msdyn_agreement_value = value;
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
     * Gets the _msdyn_contactcustomer_value property value. 
     * @returns a string
     */
    public get _msdyn_contactcustomer_value() {
        return this.__msdyn_contactcustomer_value;
    };
    /**
     * Sets the _msdyn_contactcustomer_value property value. 
     * @param value Value to set for the _msdyn_contactcustomer_value property.
     */
    public set _msdyn_contactcustomer_value(value: string | undefined) {
        this.__msdyn_contactcustomer_value = value;
    };
    /**
     * Gets the _msdyn_contactvendor_value property value. 
     * @returns a string
     */
    public get _msdyn_contactvendor_value() {
        return this.__msdyn_contactvendor_value;
    };
    /**
     * Sets the _msdyn_contactvendor_value property value. 
     * @param value Value to set for the _msdyn_contactvendor_value property.
     */
    public set _msdyn_contactvendor_value(value: string | undefined) {
        this.__msdyn_contactvendor_value = value;
    };
    /**
     * Gets the _msdyn_contractorganizationalunitid_value property value. 
     * @returns a string
     */
    public get _msdyn_contractorganizationalunitid_value() {
        return this.__msdyn_contractorganizationalunitid_value;
    };
    /**
     * Sets the _msdyn_contractorganizationalunitid_value property value. 
     * @param value Value to set for the _msdyn_contractorganizationalunitid_value property.
     */
    public set _msdyn_contractorganizationalunitid_value(value: string | undefined) {
        this.__msdyn_contractorganizationalunitid_value = value;
    };
    /**
     * Gets the _msdyn_incidenttype_value property value. 
     * @returns a string
     */
    public get _msdyn_incidenttype_value() {
        return this.__msdyn_incidenttype_value;
    };
    /**
     * Sets the _msdyn_incidenttype_value property value. 
     * @param value Value to set for the _msdyn_incidenttype_value property.
     */
    public set _msdyn_incidenttype_value(value: string | undefined) {
        this.__msdyn_incidenttype_value = value;
    };
    /**
     * Gets the _msdyn_invoice_value property value. 
     * @returns a string
     */
    public get _msdyn_invoice_value() {
        return this.__msdyn_invoice_value;
    };
    /**
     * Sets the _msdyn_invoice_value property value. 
     * @param value Value to set for the _msdyn_invoice_value property.
     */
    public set _msdyn_invoice_value(value: string | undefined) {
        this.__msdyn_invoice_value = value;
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
     * Gets the _msdyn_product_value property value. 
     * @returns a string
     */
    public get _msdyn_product_value() {
        return this.__msdyn_product_value;
    };
    /**
     * Sets the _msdyn_product_value property value. 
     * @param value Value to set for the _msdyn_product_value property.
     */
    public set _msdyn_product_value(value: string | undefined) {
        this.__msdyn_product_value = value;
    };
    /**
     * Gets the _msdyn_project_value property value. 
     * @returns a string
     */
    public get _msdyn_project_value() {
        return this.__msdyn_project_value;
    };
    /**
     * Sets the _msdyn_project_value property value. 
     * @param value Value to set for the _msdyn_project_value property.
     */
    public set _msdyn_project_value(value: string | undefined) {
        this.__msdyn_project_value = value;
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
     * Gets the _msdyn_resourceorganizationalunitid_value property value. 
     * @returns a string
     */
    public get _msdyn_resourceorganizationalunitid_value() {
        return this.__msdyn_resourceorganizationalunitid_value;
    };
    /**
     * Sets the _msdyn_resourceorganizationalunitid_value property value. 
     * @param value Value to set for the _msdyn_resourceorganizationalunitid_value property.
     */
    public set _msdyn_resourceorganizationalunitid_value(value: string | undefined) {
        this.__msdyn_resourceorganizationalunitid_value = value;
    };
    /**
     * Gets the _msdyn_salescontract_value property value. 
     * @returns a string
     */
    public get _msdyn_salescontract_value() {
        return this.__msdyn_salescontract_value;
    };
    /**
     * Sets the _msdyn_salescontract_value property value. 
     * @param value Value to set for the _msdyn_salescontract_value property.
     */
    public set _msdyn_salescontract_value(value: string | undefined) {
        this.__msdyn_salescontract_value = value;
    };
    /**
     * Gets the _msdyn_salescontractlineid_value property value. 
     * @returns a string
     */
    public get _msdyn_salescontractlineid_value() {
        return this.__msdyn_salescontractlineid_value;
    };
    /**
     * Sets the _msdyn_salescontractlineid_value property value. 
     * @param value Value to set for the _msdyn_salescontractlineid_value property.
     */
    public set _msdyn_salescontractlineid_value(value: string | undefined) {
        this.__msdyn_salescontractlineid_value = value;
    };
    /**
     * Gets the _msdyn_serviceaccount_value property value. 
     * @returns a string
     */
    public get _msdyn_serviceaccount_value() {
        return this.__msdyn_serviceaccount_value;
    };
    /**
     * Sets the _msdyn_serviceaccount_value property value. 
     * @param value Value to set for the _msdyn_serviceaccount_value property.
     */
    public set _msdyn_serviceaccount_value(value: string | undefined) {
        this.__msdyn_serviceaccount_value = value;
    };
    /**
     * Gets the _msdyn_serviceterritory_value property value. 
     * @returns a string
     */
    public get _msdyn_serviceterritory_value() {
        return this.__msdyn_serviceterritory_value;
    };
    /**
     * Sets the _msdyn_serviceterritory_value property value. 
     * @param value Value to set for the _msdyn_serviceterritory_value property.
     */
    public set _msdyn_serviceterritory_value(value: string | undefined) {
        this.__msdyn_serviceterritory_value = value;
    };
    /**
     * Gets the _msdyn_task_value property value. 
     * @returns a string
     */
    public get _msdyn_task_value() {
        return this.__msdyn_task_value;
    };
    /**
     * Sets the _msdyn_task_value property value. 
     * @param value Value to set for the _msdyn_task_value property.
     */
    public set _msdyn_task_value(value: string | undefined) {
        this.__msdyn_task_value = value;
    };
    /**
     * Gets the _msdyn_taxcode_value property value. 
     * @returns a string
     */
    public get _msdyn_taxcode_value() {
        return this.__msdyn_taxcode_value;
    };
    /**
     * Sets the _msdyn_taxcode_value property value. 
     * @param value Value to set for the _msdyn_taxcode_value property.
     */
    public set _msdyn_taxcode_value(value: string | undefined) {
        this.__msdyn_taxcode_value = value;
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
     * Gets the _msdyn_warehouse_value property value. 
     * @returns a string
     */
    public get _msdyn_warehouse_value() {
        return this.__msdyn_warehouse_value;
    };
    /**
     * Sets the _msdyn_warehouse_value property value. 
     * @param value Value to set for the _msdyn_warehouse_value property.
     */
    public set _msdyn_warehouse_value(value: string | undefined) {
        this.__msdyn_warehouse_value = value;
    };
    /**
     * Gets the _msdyn_workorder_value property value. 
     * @returns a string
     */
    public get _msdyn_workorder_value() {
        return this.__msdyn_workorder_value;
    };
    /**
     * Sets the _msdyn_workorder_value property value. 
     * @param value Value to set for the _msdyn_workorder_value property.
     */
    public set _msdyn_workorder_value(value: string | undefined) {
        this.__msdyn_workorder_value = value;
    };
    /**
     * Gets the _msdyn_workordertype_value property value. 
     * @returns a string
     */
    public get _msdyn_workordertype_value() {
        return this.__msdyn_workordertype_value;
    };
    /**
     * Sets the _msdyn_workordertype_value property value. 
     * @param value Value to set for the _msdyn_workordertype_value property.
     */
    public set _msdyn_workordertype_value(value: string | undefined) {
        this.__msdyn_workordertype_value = value;
    };
    /**
     * Gets the _ownerid_value property value. 
     * @returns a string
     */
    public get _ownerid_value() {
        return this.__ownerid_value;
    };
    /**
     * Sets the _ownerid_value property value. 
     * @param value Value to set for the _ownerid_value property.
     */
    public set _ownerid_value(value: string | undefined) {
        this.__ownerid_value = value;
    };
    /**
     * Gets the _owningbusinessunit_value property value. 
     * @returns a string
     */
    public get _owningbusinessunit_value() {
        return this.__owningbusinessunit_value;
    };
    /**
     * Sets the _owningbusinessunit_value property value. 
     * @param value Value to set for the _owningbusinessunit_value property.
     */
    public set _owningbusinessunit_value(value: string | undefined) {
        this.__owningbusinessunit_value = value;
    };
    /**
     * Gets the _owningteam_value property value. 
     * @returns a string
     */
    public get _owningteam_value() {
        return this.__owningteam_value;
    };
    /**
     * Sets the _owningteam_value property value. 
     * @param value Value to set for the _owningteam_value property.
     */
    public set _owningteam_value(value: string | undefined) {
        this.__owningteam_value = value;
    };
    /**
     * Gets the _owninguser_value property value. 
     * @returns a string
     */
    public get _owninguser_value() {
        return this.__owninguser_value;
    };
    /**
     * Sets the _owninguser_value property value. 
     * @param value Value to set for the _owninguser_value property.
     */
    public set _owninguser_value(value: string | undefined) {
        this.__owninguser_value = value;
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
     * Instantiates a new msdyn_actual and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_actual)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_actual)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_actual)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_actual)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_accountcustomer_value": (o, n) => { (o as unknown as Msdyn_actual)._msdyn_accountcustomer_value = n.getStringValue(); },
            "_msdyn_accountvendor_value": (o, n) => { (o as unknown as Msdyn_actual)._msdyn_accountvendor_value = n.getStringValue(); },
            "_msdyn_agreement_value": (o, n) => { (o as unknown as Msdyn_actual)._msdyn_agreement_value = n.getStringValue(); },
            "_msdyn_bookableresource_value": (o, n) => { (o as unknown as Msdyn_actual)._msdyn_bookableresource_value = n.getStringValue(); },
            "_msdyn_contactcustomer_value": (o, n) => { (o as unknown as Msdyn_actual)._msdyn_contactcustomer_value = n.getStringValue(); },
            "_msdyn_contactvendor_value": (o, n) => { (o as unknown as Msdyn_actual)._msdyn_contactvendor_value = n.getStringValue(); },
            "_msdyn_contractorganizationalunitid_value": (o, n) => { (o as unknown as Msdyn_actual)._msdyn_contractorganizationalunitid_value = n.getStringValue(); },
            "_msdyn_incidenttype_value": (o, n) => { (o as unknown as Msdyn_actual)._msdyn_incidenttype_value = n.getStringValue(); },
            "_msdyn_invoice_value": (o, n) => { (o as unknown as Msdyn_actual)._msdyn_invoice_value = n.getStringValue(); },
            "_msdyn_pricelist_value": (o, n) => { (o as unknown as Msdyn_actual)._msdyn_pricelist_value = n.getStringValue(); },
            "_msdyn_product_value": (o, n) => { (o as unknown as Msdyn_actual)._msdyn_product_value = n.getStringValue(); },
            "_msdyn_project_value": (o, n) => { (o as unknown as Msdyn_actual)._msdyn_project_value = n.getStringValue(); },
            "_msdyn_resourcecategory_value": (o, n) => { (o as unknown as Msdyn_actual)._msdyn_resourcecategory_value = n.getStringValue(); },
            "_msdyn_resourceorganizationalunitid_value": (o, n) => { (o as unknown as Msdyn_actual)._msdyn_resourceorganizationalunitid_value = n.getStringValue(); },
            "_msdyn_salescontract_value": (o, n) => { (o as unknown as Msdyn_actual)._msdyn_salescontract_value = n.getStringValue(); },
            "_msdyn_salescontractlineid_value": (o, n) => { (o as unknown as Msdyn_actual)._msdyn_salescontractlineid_value = n.getStringValue(); },
            "_msdyn_serviceaccount_value": (o, n) => { (o as unknown as Msdyn_actual)._msdyn_serviceaccount_value = n.getStringValue(); },
            "_msdyn_serviceterritory_value": (o, n) => { (o as unknown as Msdyn_actual)._msdyn_serviceterritory_value = n.getStringValue(); },
            "_msdyn_task_value": (o, n) => { (o as unknown as Msdyn_actual)._msdyn_task_value = n.getStringValue(); },
            "_msdyn_taxcode_value": (o, n) => { (o as unknown as Msdyn_actual)._msdyn_taxcode_value = n.getStringValue(); },
            "_msdyn_transactioncategory_value": (o, n) => { (o as unknown as Msdyn_actual)._msdyn_transactioncategory_value = n.getStringValue(); },
            "_msdyn_unit_value": (o, n) => { (o as unknown as Msdyn_actual)._msdyn_unit_value = n.getStringValue(); },
            "_msdyn_unitschedule_value": (o, n) => { (o as unknown as Msdyn_actual)._msdyn_unitschedule_value = n.getStringValue(); },
            "_msdyn_warehouse_value": (o, n) => { (o as unknown as Msdyn_actual)._msdyn_warehouse_value = n.getStringValue(); },
            "_msdyn_workorder_value": (o, n) => { (o as unknown as Msdyn_actual)._msdyn_workorder_value = n.getStringValue(); },
            "_msdyn_workordertype_value": (o, n) => { (o as unknown as Msdyn_actual)._msdyn_workordertype_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_actual)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_actual)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_actual)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_actual)._owninguser_value = n.getStringValue(); },
            "_transactioncurrencyid_value": (o, n) => { (o as unknown as Msdyn_actual)._transactioncurrencyid_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_actual).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_actual).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_actual).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "exchangerate": (o, n) => { (o as unknown as Msdyn_actual).exchangerate = n.getNumberValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_actual).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_actual).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_actual).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_actual).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_AccountCustomer": (o, n) => { (o as unknown as Msdyn_actual).msdyn_AccountCustomer = n.getObjectValue<Account>(createAccountFromDiscriminatorValue); },
            "msdyn_accountingdate": (o, n) => { (o as unknown as Msdyn_actual).msdyn_accountingdate = n.getDateValue(); },
            "msdyn_AccountVendor": (o, n) => { (o as unknown as Msdyn_actual).msdyn_AccountVendor = n.getObjectValue<Account>(createAccountFromDiscriminatorValue); },
            "msdyn_actual_Annotations": (o, n) => { (o as unknown as Msdyn_actual).msdyn_actual_Annotations = n.getCollectionOfObjectValues<Annotation>(createAnnotationFromDiscriminatorValue); },
            "msdyn_actual_AsyncOperations": (o, n) => { (o as unknown as Msdyn_actual).msdyn_actual_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_actual_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_actual).msdyn_actual_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_actual_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_actual).msdyn_actual_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_actual_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_actual).msdyn_actual_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_actual_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_actual).msdyn_actual_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_actual_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_actual).msdyn_actual_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_actual_ProcessSession": (o, n) => { (o as unknown as Msdyn_actual).msdyn_actual_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_actual_SyncErrors": (o, n) => { (o as unknown as Msdyn_actual).msdyn_actual_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_actualid": (o, n) => { (o as unknown as Msdyn_actual).msdyn_actualid = n.getStringValue(); },
            "msdyn_adjustmentstatus": (o, n) => { (o as unknown as Msdyn_actual).msdyn_adjustmentstatus = n.getNumberValue(); },
            "msdyn_Agreement": (o, n) => { (o as unknown as Msdyn_actual).msdyn_Agreement = n.getObjectValue<Msdyn_agreement>(createMsdyn_agreementFromDiscriminatorValue); },
            "msdyn_amount": (o, n) => { (o as unknown as Msdyn_actual).msdyn_amount = n.getNumberValue(); },
            "msdyn_amount_base": (o, n) => { (o as unknown as Msdyn_actual).msdyn_amount_base = n.getNumberValue(); },
            "msdyn_amountmethod": (o, n) => { (o as unknown as Msdyn_actual).msdyn_amountmethod = n.getNumberValue(); },
            "msdyn_basisamount": (o, n) => { (o as unknown as Msdyn_actual).msdyn_basisamount = n.getNumberValue(); },
            "msdyn_basisamount_base": (o, n) => { (o as unknown as Msdyn_actual).msdyn_basisamount_base = n.getNumberValue(); },
            "msdyn_basisprice": (o, n) => { (o as unknown as Msdyn_actual).msdyn_basisprice = n.getNumberValue(); },
            "msdyn_basisprice_base": (o, n) => { (o as unknown as Msdyn_actual).msdyn_basisprice_base = n.getNumberValue(); },
            "msdyn_basisquantity": (o, n) => { (o as unknown as Msdyn_actual).msdyn_basisquantity = n.getNumberValue(); },
            "msdyn_billingstatus": (o, n) => { (o as unknown as Msdyn_actual).msdyn_billingstatus = n.getNumberValue(); },
            "msdyn_billingtype": (o, n) => { (o as unknown as Msdyn_actual).msdyn_billingtype = n.getNumberValue(); },
            "msdyn_bookableresource": (o, n) => { (o as unknown as Msdyn_actual).msdyn_bookableresource = n.getObjectValue<Bookableresource>(createBookableresourceFromDiscriminatorValue); },
            "msdyn_ContactCustomer": (o, n) => { (o as unknown as Msdyn_actual).msdyn_ContactCustomer = n.getObjectValue<Contact>(createContactFromDiscriminatorValue); },
            "msdyn_ContactVendor": (o, n) => { (o as unknown as Msdyn_actual).msdyn_ContactVendor = n.getObjectValue<Contact>(createContactFromDiscriminatorValue); },
            "msdyn_contractorganizationalunitid": (o, n) => { (o as unknown as Msdyn_actual).msdyn_contractorganizationalunitid = n.getObjectValue<Msdyn_organizationalunit>(createMsdyn_organizationalunitFromDiscriminatorValue); },
            "msdyn_customertype": (o, n) => { (o as unknown as Msdyn_actual).msdyn_customertype = n.getNumberValue(); },
            "msdyn_description": (o, n) => { (o as unknown as Msdyn_actual).msdyn_description = n.getStringValue(); },
            "msdyn_documentdate": (o, n) => { (o as unknown as Msdyn_actual).msdyn_documentdate = n.getDateValue(); },
            "msdyn_enddatetime": (o, n) => { (o as unknown as Msdyn_actual).msdyn_enddatetime = n.getDateValue(); },
            "msdyn_exchangeratedate": (o, n) => { (o as unknown as Msdyn_actual).msdyn_exchangeratedate = n.getDateValue(); },
            "msdyn_externaldescription": (o, n) => { (o as unknown as Msdyn_actual).msdyn_externaldescription = n.getStringValue(); },
            "msdyn_externalreferencedate": (o, n) => { (o as unknown as Msdyn_actual).msdyn_externalreferencedate = n.getDateValue(); },
            "msdyn_externalreferenceid": (o, n) => { (o as unknown as Msdyn_actual).msdyn_externalreferenceid = n.getStringValue(); },
            "msdyn_IncidentType": (o, n) => { (o as unknown as Msdyn_actual).msdyn_IncidentType = n.getObjectValue<Msdyn_incidenttype>(createMsdyn_incidenttypeFromDiscriminatorValue); },
            "msdyn_Invoice": (o, n) => { (o as unknown as Msdyn_actual).msdyn_Invoice = n.getObjectValue<Invoice>(createInvoiceFromDiscriminatorValue); },
            "msdyn_isjournalized": (o, n) => { (o as unknown as Msdyn_actual).msdyn_isjournalized = n.getBooleanValue(); },
            "msdyn_journaltype": (o, n) => { (o as unknown as Msdyn_actual).msdyn_journaltype = n.getNumberValue(); },
            "msdyn_percent": (o, n) => { (o as unknown as Msdyn_actual).msdyn_percent = n.getNumberValue(); },
            "msdyn_price": (o, n) => { (o as unknown as Msdyn_actual).msdyn_price = n.getNumberValue(); },
            "msdyn_price_base": (o, n) => { (o as unknown as Msdyn_actual).msdyn_price_base = n.getNumberValue(); },
            "msdyn_PriceList": (o, n) => { (o as unknown as Msdyn_actual).msdyn_PriceList = n.getObjectValue<Pricelevel>(createPricelevelFromDiscriminatorValue); },
            "msdyn_Product": (o, n) => { (o as unknown as Msdyn_actual).msdyn_Product = n.getObjectValue<Product>(createProductFromDiscriminatorValue); },
            "msdyn_producttype": (o, n) => { (o as unknown as Msdyn_actual).msdyn_producttype = n.getNumberValue(); },
            "msdyn_Project": (o, n) => { (o as unknown as Msdyn_actual).msdyn_Project = n.getObjectValue<Msdyn_project>(createMsdyn_projectFromDiscriminatorValue); },
            "msdyn_quantity": (o, n) => { (o as unknown as Msdyn_actual).msdyn_quantity = n.getNumberValue(); },
            "msdyn_ResourceCategory": (o, n) => { (o as unknown as Msdyn_actual).msdyn_ResourceCategory = n.getObjectValue<Bookableresourcecategory>(createBookableresourcecategoryFromDiscriminatorValue); },
            "msdyn_ResourceOrganizationalUnitId": (o, n) => { (o as unknown as Msdyn_actual).msdyn_ResourceOrganizationalUnitId = n.getObjectValue<Msdyn_organizationalunit>(createMsdyn_organizationalunitFromDiscriminatorValue); },
            "msdyn_SalesContract": (o, n) => { (o as unknown as Msdyn_actual).msdyn_SalesContract = n.getObjectValue<Salesorder>(createSalesorderFromDiscriminatorValue); },
            "msdyn_salescontractline": (o, n) => { (o as unknown as Msdyn_actual).msdyn_salescontractline = n.getStringValue(); },
            "msdyn_SalesContractLineId": (o, n) => { (o as unknown as Msdyn_actual).msdyn_SalesContractLineId = n.getObjectValue<Salesorderdetail>(createSalesorderdetailFromDiscriminatorValue); },
            "msdyn_ServiceAccount": (o, n) => { (o as unknown as Msdyn_actual).msdyn_ServiceAccount = n.getObjectValue<Account>(createAccountFromDiscriminatorValue); },
            "msdyn_ServiceTerritory": (o, n) => { (o as unknown as Msdyn_actual).msdyn_ServiceTerritory = n.getObjectValue<Territory>(createTerritoryFromDiscriminatorValue); },
            "msdyn_startdatetime": (o, n) => { (o as unknown as Msdyn_actual).msdyn_startdatetime = n.getDateValue(); },
            "msdyn_Task": (o, n) => { (o as unknown as Msdyn_actual).msdyn_Task = n.getObjectValue<Msdyn_projecttask>(createMsdyn_projecttaskFromDiscriminatorValue); },
            "msdyn_TaxCode": (o, n) => { (o as unknown as Msdyn_actual).msdyn_TaxCode = n.getObjectValue<Msdyn_taxcode>(createMsdyn_taxcodeFromDiscriminatorValue); },
            "msdyn_TransactionCategory": (o, n) => { (o as unknown as Msdyn_actual).msdyn_TransactionCategory = n.getObjectValue<Msdyn_transactioncategory>(createMsdyn_transactioncategoryFromDiscriminatorValue); },
            "msdyn_transactionclassification": (o, n) => { (o as unknown as Msdyn_actual).msdyn_transactionclassification = n.getNumberValue(); },
            "msdyn_transactiontypecode": (o, n) => { (o as unknown as Msdyn_actual).msdyn_transactiontypecode = n.getNumberValue(); },
            "msdyn_Unit": (o, n) => { (o as unknown as Msdyn_actual).msdyn_Unit = n.getObjectValue<Uom>(createUomFromDiscriminatorValue); },
            "msdyn_UnitSchedule": (o, n) => { (o as unknown as Msdyn_actual).msdyn_UnitSchedule = n.getObjectValue<Uomschedule>(createUomscheduleFromDiscriminatorValue); },
            "msdyn_vendortype": (o, n) => { (o as unknown as Msdyn_actual).msdyn_vendortype = n.getNumberValue(); },
            "msdyn_Warehouse": (o, n) => { (o as unknown as Msdyn_actual).msdyn_Warehouse = n.getObjectValue<Msdyn_warehouse>(createMsdyn_warehouseFromDiscriminatorValue); },
            "msdyn_worklocation": (o, n) => { (o as unknown as Msdyn_actual).msdyn_worklocation = n.getNumberValue(); },
            "msdyn_WorkOrder": (o, n) => { (o as unknown as Msdyn_actual).msdyn_WorkOrder = n.getObjectValue<Msdyn_workorder>(createMsdyn_workorderFromDiscriminatorValue); },
            "msdyn_WorkOrderType": (o, n) => { (o as unknown as Msdyn_actual).msdyn_WorkOrderType = n.getObjectValue<Msdyn_workordertype>(createMsdyn_workordertypeFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_actual).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_actual).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_actual).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_actual).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_actual).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msdyn_actual).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_actual).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_actual).timezoneruleversionnumber = n.getNumberValue(); },
            "transactioncurrencyid": (o, n) => { (o as unknown as Msdyn_actual).transactioncurrencyid = n.getObjectValue<Transactioncurrency>(createTransactioncurrencyFromDiscriminatorValue); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_actual).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_actual).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_AccountCustomer property value. 
     * @returns a account
     */
    public get msdyn_AccountCustomer() {
        return this._msdyn_AccountCustomer;
    };
    /**
     * Sets the msdyn_AccountCustomer property value. 
     * @param value Value to set for the msdyn_AccountCustomer property.
     */
    public set msdyn_AccountCustomer(value: Account | undefined) {
        this._msdyn_AccountCustomer = value;
    };
    /**
     * Gets the msdyn_accountingdate property value. 
     * @returns a Date
     */
    public get msdyn_accountingdate() {
        return this._msdyn_accountingdate;
    };
    /**
     * Sets the msdyn_accountingdate property value. 
     * @param value Value to set for the msdyn_accountingdate property.
     */
    public set msdyn_accountingdate(value: Date | undefined) {
        this._msdyn_accountingdate = value;
    };
    /**
     * Gets the msdyn_AccountVendor property value. 
     * @returns a account
     */
    public get msdyn_AccountVendor() {
        return this._msdyn_AccountVendor;
    };
    /**
     * Sets the msdyn_AccountVendor property value. 
     * @param value Value to set for the msdyn_AccountVendor property.
     */
    public set msdyn_AccountVendor(value: Account | undefined) {
        this._msdyn_AccountVendor = value;
    };
    /**
     * Gets the msdyn_actual_Annotations property value. 
     * @returns a annotation
     */
    public get msdyn_actual_Annotations() {
        return this._msdyn_actual_Annotations;
    };
    /**
     * Sets the msdyn_actual_Annotations property value. 
     * @param value Value to set for the msdyn_actual_Annotations property.
     */
    public set msdyn_actual_Annotations(value: Annotation[] | undefined) {
        this._msdyn_actual_Annotations = value;
    };
    /**
     * Gets the msdyn_actual_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_actual_AsyncOperations() {
        return this._msdyn_actual_AsyncOperations;
    };
    /**
     * Sets the msdyn_actual_AsyncOperations property value. 
     * @param value Value to set for the msdyn_actual_AsyncOperations property.
     */
    public set msdyn_actual_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_actual_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_actual_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_actual_BulkDeleteFailures() {
        return this._msdyn_actual_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_actual_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_actual_BulkDeleteFailures property.
     */
    public set msdyn_actual_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_actual_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_actual_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_actual_DuplicateBaseRecord() {
        return this._msdyn_actual_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_actual_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_actual_DuplicateBaseRecord property.
     */
    public set msdyn_actual_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_actual_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_actual_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_actual_DuplicateMatchingRecord() {
        return this._msdyn_actual_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_actual_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_actual_DuplicateMatchingRecord property.
     */
    public set msdyn_actual_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_actual_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_actual_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_actual_MailboxTrackingFolders() {
        return this._msdyn_actual_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_actual_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_actual_MailboxTrackingFolders property.
     */
    public set msdyn_actual_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_actual_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_actual_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_actual_PrincipalObjectAttributeAccesses() {
        return this._msdyn_actual_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_actual_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_actual_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_actual_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_actual_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_actual_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_actual_ProcessSession() {
        return this._msdyn_actual_ProcessSession;
    };
    /**
     * Sets the msdyn_actual_ProcessSession property value. 
     * @param value Value to set for the msdyn_actual_ProcessSession property.
     */
    public set msdyn_actual_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_actual_ProcessSession = value;
    };
    /**
     * Gets the msdyn_actual_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_actual_SyncErrors() {
        return this._msdyn_actual_SyncErrors;
    };
    /**
     * Sets the msdyn_actual_SyncErrors property value. 
     * @param value Value to set for the msdyn_actual_SyncErrors property.
     */
    public set msdyn_actual_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_actual_SyncErrors = value;
    };
    /**
     * Gets the msdyn_actualid property value. 
     * @returns a string
     */
    public get msdyn_actualid() {
        return this._msdyn_actualid;
    };
    /**
     * Sets the msdyn_actualid property value. 
     * @param value Value to set for the msdyn_actualid property.
     */
    public set msdyn_actualid(value: string | undefined) {
        this._msdyn_actualid = value;
    };
    /**
     * Gets the msdyn_adjustmentstatus property value. 
     * @returns a integer
     */
    public get msdyn_adjustmentstatus() {
        return this._msdyn_adjustmentstatus;
    };
    /**
     * Sets the msdyn_adjustmentstatus property value. 
     * @param value Value to set for the msdyn_adjustmentstatus property.
     */
    public set msdyn_adjustmentstatus(value: number | undefined) {
        this._msdyn_adjustmentstatus = value;
    };
    /**
     * Gets the msdyn_Agreement property value. 
     * @returns a msdyn_agreement
     */
    public get msdyn_Agreement() {
        return this._msdyn_Agreement;
    };
    /**
     * Sets the msdyn_Agreement property value. 
     * @param value Value to set for the msdyn_Agreement property.
     */
    public set msdyn_Agreement(value: Msdyn_agreement | undefined) {
        this._msdyn_Agreement = value;
    };
    /**
     * Gets the msdyn_amount property value. 
     * @returns a int64
     */
    public get msdyn_amount() {
        return this._msdyn_amount;
    };
    /**
     * Sets the msdyn_amount property value. 
     * @param value Value to set for the msdyn_amount property.
     */
    public set msdyn_amount(value: number | undefined) {
        this._msdyn_amount = value;
    };
    /**
     * Gets the msdyn_amount_base property value. 
     * @returns a int64
     */
    public get msdyn_amount_base() {
        return this._msdyn_amount_base;
    };
    /**
     * Sets the msdyn_amount_base property value. 
     * @param value Value to set for the msdyn_amount_base property.
     */
    public set msdyn_amount_base(value: number | undefined) {
        this._msdyn_amount_base = value;
    };
    /**
     * Gets the msdyn_amountmethod property value. 
     * @returns a integer
     */
    public get msdyn_amountmethod() {
        return this._msdyn_amountmethod;
    };
    /**
     * Sets the msdyn_amountmethod property value. 
     * @param value Value to set for the msdyn_amountmethod property.
     */
    public set msdyn_amountmethod(value: number | undefined) {
        this._msdyn_amountmethod = value;
    };
    /**
     * Gets the msdyn_basisamount property value. 
     * @returns a int64
     */
    public get msdyn_basisamount() {
        return this._msdyn_basisamount;
    };
    /**
     * Sets the msdyn_basisamount property value. 
     * @param value Value to set for the msdyn_basisamount property.
     */
    public set msdyn_basisamount(value: number | undefined) {
        this._msdyn_basisamount = value;
    };
    /**
     * Gets the msdyn_basisamount_base property value. 
     * @returns a int64
     */
    public get msdyn_basisamount_base() {
        return this._msdyn_basisamount_base;
    };
    /**
     * Sets the msdyn_basisamount_base property value. 
     * @param value Value to set for the msdyn_basisamount_base property.
     */
    public set msdyn_basisamount_base(value: number | undefined) {
        this._msdyn_basisamount_base = value;
    };
    /**
     * Gets the msdyn_basisprice property value. 
     * @returns a int64
     */
    public get msdyn_basisprice() {
        return this._msdyn_basisprice;
    };
    /**
     * Sets the msdyn_basisprice property value. 
     * @param value Value to set for the msdyn_basisprice property.
     */
    public set msdyn_basisprice(value: number | undefined) {
        this._msdyn_basisprice = value;
    };
    /**
     * Gets the msdyn_basisprice_base property value. 
     * @returns a int64
     */
    public get msdyn_basisprice_base() {
        return this._msdyn_basisprice_base;
    };
    /**
     * Sets the msdyn_basisprice_base property value. 
     * @param value Value to set for the msdyn_basisprice_base property.
     */
    public set msdyn_basisprice_base(value: number | undefined) {
        this._msdyn_basisprice_base = value;
    };
    /**
     * Gets the msdyn_basisquantity property value. 
     * @returns a int64
     */
    public get msdyn_basisquantity() {
        return this._msdyn_basisquantity;
    };
    /**
     * Sets the msdyn_basisquantity property value. 
     * @param value Value to set for the msdyn_basisquantity property.
     */
    public set msdyn_basisquantity(value: number | undefined) {
        this._msdyn_basisquantity = value;
    };
    /**
     * Gets the msdyn_billingstatus property value. 
     * @returns a integer
     */
    public get msdyn_billingstatus() {
        return this._msdyn_billingstatus;
    };
    /**
     * Sets the msdyn_billingstatus property value. 
     * @param value Value to set for the msdyn_billingstatus property.
     */
    public set msdyn_billingstatus(value: number | undefined) {
        this._msdyn_billingstatus = value;
    };
    /**
     * Gets the msdyn_billingtype property value. 
     * @returns a integer
     */
    public get msdyn_billingtype() {
        return this._msdyn_billingtype;
    };
    /**
     * Sets the msdyn_billingtype property value. 
     * @param value Value to set for the msdyn_billingtype property.
     */
    public set msdyn_billingtype(value: number | undefined) {
        this._msdyn_billingtype = value;
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
     * Gets the msdyn_ContactCustomer property value. 
     * @returns a contact
     */
    public get msdyn_ContactCustomer() {
        return this._msdyn_ContactCustomer;
    };
    /**
     * Sets the msdyn_ContactCustomer property value. 
     * @param value Value to set for the msdyn_ContactCustomer property.
     */
    public set msdyn_ContactCustomer(value: Contact | undefined) {
        this._msdyn_ContactCustomer = value;
    };
    /**
     * Gets the msdyn_ContactVendor property value. 
     * @returns a contact
     */
    public get msdyn_ContactVendor() {
        return this._msdyn_ContactVendor;
    };
    /**
     * Sets the msdyn_ContactVendor property value. 
     * @param value Value to set for the msdyn_ContactVendor property.
     */
    public set msdyn_ContactVendor(value: Contact | undefined) {
        this._msdyn_ContactVendor = value;
    };
    /**
     * Gets the msdyn_contractorganizationalunitid property value. 
     * @returns a msdyn_organizationalunit
     */
    public get msdyn_contractorganizationalunitid() {
        return this._msdyn_contractorganizationalunitid;
    };
    /**
     * Sets the msdyn_contractorganizationalunitid property value. 
     * @param value Value to set for the msdyn_contractorganizationalunitid property.
     */
    public set msdyn_contractorganizationalunitid(value: Msdyn_organizationalunit | undefined) {
        this._msdyn_contractorganizationalunitid = value;
    };
    /**
     * Gets the msdyn_customertype property value. 
     * @returns a integer
     */
    public get msdyn_customertype() {
        return this._msdyn_customertype;
    };
    /**
     * Sets the msdyn_customertype property value. 
     * @param value Value to set for the msdyn_customertype property.
     */
    public set msdyn_customertype(value: number | undefined) {
        this._msdyn_customertype = value;
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
     * Gets the msdyn_documentdate property value. 
     * @returns a Date
     */
    public get msdyn_documentdate() {
        return this._msdyn_documentdate;
    };
    /**
     * Sets the msdyn_documentdate property value. 
     * @param value Value to set for the msdyn_documentdate property.
     */
    public set msdyn_documentdate(value: Date | undefined) {
        this._msdyn_documentdate = value;
    };
    /**
     * Gets the msdyn_enddatetime property value. 
     * @returns a Date
     */
    public get msdyn_enddatetime() {
        return this._msdyn_enddatetime;
    };
    /**
     * Sets the msdyn_enddatetime property value. 
     * @param value Value to set for the msdyn_enddatetime property.
     */
    public set msdyn_enddatetime(value: Date | undefined) {
        this._msdyn_enddatetime = value;
    };
    /**
     * Gets the msdyn_exchangeratedate property value. 
     * @returns a Date
     */
    public get msdyn_exchangeratedate() {
        return this._msdyn_exchangeratedate;
    };
    /**
     * Sets the msdyn_exchangeratedate property value. 
     * @param value Value to set for the msdyn_exchangeratedate property.
     */
    public set msdyn_exchangeratedate(value: Date | undefined) {
        this._msdyn_exchangeratedate = value;
    };
    /**
     * Gets the msdyn_externaldescription property value. 
     * @returns a string
     */
    public get msdyn_externaldescription() {
        return this._msdyn_externaldescription;
    };
    /**
     * Sets the msdyn_externaldescription property value. 
     * @param value Value to set for the msdyn_externaldescription property.
     */
    public set msdyn_externaldescription(value: string | undefined) {
        this._msdyn_externaldescription = value;
    };
    /**
     * Gets the msdyn_externalreferencedate property value. 
     * @returns a Date
     */
    public get msdyn_externalreferencedate() {
        return this._msdyn_externalreferencedate;
    };
    /**
     * Sets the msdyn_externalreferencedate property value. 
     * @param value Value to set for the msdyn_externalreferencedate property.
     */
    public set msdyn_externalreferencedate(value: Date | undefined) {
        this._msdyn_externalreferencedate = value;
    };
    /**
     * Gets the msdyn_externalreferenceid property value. 
     * @returns a string
     */
    public get msdyn_externalreferenceid() {
        return this._msdyn_externalreferenceid;
    };
    /**
     * Sets the msdyn_externalreferenceid property value. 
     * @param value Value to set for the msdyn_externalreferenceid property.
     */
    public set msdyn_externalreferenceid(value: string | undefined) {
        this._msdyn_externalreferenceid = value;
    };
    /**
     * Gets the msdyn_IncidentType property value. 
     * @returns a msdyn_incidenttype
     */
    public get msdyn_IncidentType() {
        return this._msdyn_IncidentType;
    };
    /**
     * Sets the msdyn_IncidentType property value. 
     * @param value Value to set for the msdyn_IncidentType property.
     */
    public set msdyn_IncidentType(value: Msdyn_incidenttype | undefined) {
        this._msdyn_IncidentType = value;
    };
    /**
     * Gets the msdyn_Invoice property value. 
     * @returns a invoice
     */
    public get msdyn_Invoice() {
        return this._msdyn_Invoice;
    };
    /**
     * Sets the msdyn_Invoice property value. 
     * @param value Value to set for the msdyn_Invoice property.
     */
    public set msdyn_Invoice(value: Invoice | undefined) {
        this._msdyn_Invoice = value;
    };
    /**
     * Gets the msdyn_isjournalized property value. 
     * @returns a boolean
     */
    public get msdyn_isjournalized() {
        return this._msdyn_isjournalized;
    };
    /**
     * Sets the msdyn_isjournalized property value. 
     * @param value Value to set for the msdyn_isjournalized property.
     */
    public set msdyn_isjournalized(value: boolean | undefined) {
        this._msdyn_isjournalized = value;
    };
    /**
     * Gets the msdyn_journaltype property value. 
     * @returns a integer
     */
    public get msdyn_journaltype() {
        return this._msdyn_journaltype;
    };
    /**
     * Sets the msdyn_journaltype property value. 
     * @param value Value to set for the msdyn_journaltype property.
     */
    public set msdyn_journaltype(value: number | undefined) {
        this._msdyn_journaltype = value;
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
     * Gets the msdyn_Product property value. 
     * @returns a product
     */
    public get msdyn_Product() {
        return this._msdyn_Product;
    };
    /**
     * Sets the msdyn_Product property value. 
     * @param value Value to set for the msdyn_Product property.
     */
    public set msdyn_Product(value: Product | undefined) {
        this._msdyn_Product = value;
    };
    /**
     * Gets the msdyn_producttype property value. 
     * @returns a integer
     */
    public get msdyn_producttype() {
        return this._msdyn_producttype;
    };
    /**
     * Sets the msdyn_producttype property value. 
     * @param value Value to set for the msdyn_producttype property.
     */
    public set msdyn_producttype(value: number | undefined) {
        this._msdyn_producttype = value;
    };
    /**
     * Gets the msdyn_Project property value. 
     * @returns a msdyn_project
     */
    public get msdyn_Project() {
        return this._msdyn_Project;
    };
    /**
     * Sets the msdyn_Project property value. 
     * @param value Value to set for the msdyn_Project property.
     */
    public set msdyn_Project(value: Msdyn_project | undefined) {
        this._msdyn_Project = value;
    };
    /**
     * Gets the msdyn_quantity property value. 
     * @returns a int64
     */
    public get msdyn_quantity() {
        return this._msdyn_quantity;
    };
    /**
     * Sets the msdyn_quantity property value. 
     * @param value Value to set for the msdyn_quantity property.
     */
    public set msdyn_quantity(value: number | undefined) {
        this._msdyn_quantity = value;
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
     * Gets the msdyn_ResourceOrganizationalUnitId property value. 
     * @returns a msdyn_organizationalunit
     */
    public get msdyn_ResourceOrganizationalUnitId() {
        return this._msdyn_ResourceOrganizationalUnitId;
    };
    /**
     * Sets the msdyn_ResourceOrganizationalUnitId property value. 
     * @param value Value to set for the msdyn_ResourceOrganizationalUnitId property.
     */
    public set msdyn_ResourceOrganizationalUnitId(value: Msdyn_organizationalunit | undefined) {
        this._msdyn_ResourceOrganizationalUnitId = value;
    };
    /**
     * Gets the msdyn_SalesContract property value. 
     * @returns a salesorder
     */
    public get msdyn_SalesContract() {
        return this._msdyn_SalesContract;
    };
    /**
     * Sets the msdyn_SalesContract property value. 
     * @param value Value to set for the msdyn_SalesContract property.
     */
    public set msdyn_SalesContract(value: Salesorder | undefined) {
        this._msdyn_SalesContract = value;
    };
    /**
     * Gets the msdyn_salescontractline property value. 
     * @returns a string
     */
    public get msdyn_salescontractline() {
        return this._msdyn_salescontractline;
    };
    /**
     * Sets the msdyn_salescontractline property value. 
     * @param value Value to set for the msdyn_salescontractline property.
     */
    public set msdyn_salescontractline(value: string | undefined) {
        this._msdyn_salescontractline = value;
    };
    /**
     * Gets the msdyn_SalesContractLineId property value. 
     * @returns a salesorderdetail
     */
    public get msdyn_SalesContractLineId() {
        return this._msdyn_SalesContractLineId;
    };
    /**
     * Sets the msdyn_SalesContractLineId property value. 
     * @param value Value to set for the msdyn_SalesContractLineId property.
     */
    public set msdyn_SalesContractLineId(value: Salesorderdetail | undefined) {
        this._msdyn_SalesContractLineId = value;
    };
    /**
     * Gets the msdyn_ServiceAccount property value. 
     * @returns a account
     */
    public get msdyn_ServiceAccount() {
        return this._msdyn_ServiceAccount;
    };
    /**
     * Sets the msdyn_ServiceAccount property value. 
     * @param value Value to set for the msdyn_ServiceAccount property.
     */
    public set msdyn_ServiceAccount(value: Account | undefined) {
        this._msdyn_ServiceAccount = value;
    };
    /**
     * Gets the msdyn_ServiceTerritory property value. 
     * @returns a territory
     */
    public get msdyn_ServiceTerritory() {
        return this._msdyn_ServiceTerritory;
    };
    /**
     * Sets the msdyn_ServiceTerritory property value. 
     * @param value Value to set for the msdyn_ServiceTerritory property.
     */
    public set msdyn_ServiceTerritory(value: Territory | undefined) {
        this._msdyn_ServiceTerritory = value;
    };
    /**
     * Gets the msdyn_startdatetime property value. 
     * @returns a Date
     */
    public get msdyn_startdatetime() {
        return this._msdyn_startdatetime;
    };
    /**
     * Sets the msdyn_startdatetime property value. 
     * @param value Value to set for the msdyn_startdatetime property.
     */
    public set msdyn_startdatetime(value: Date | undefined) {
        this._msdyn_startdatetime = value;
    };
    /**
     * Gets the msdyn_Task property value. 
     * @returns a msdyn_projecttask
     */
    public get msdyn_Task() {
        return this._msdyn_Task;
    };
    /**
     * Sets the msdyn_Task property value. 
     * @param value Value to set for the msdyn_Task property.
     */
    public set msdyn_Task(value: Msdyn_projecttask | undefined) {
        this._msdyn_Task = value;
    };
    /**
     * Gets the msdyn_TaxCode property value. 
     * @returns a msdyn_taxcode
     */
    public get msdyn_TaxCode() {
        return this._msdyn_TaxCode;
    };
    /**
     * Sets the msdyn_TaxCode property value. 
     * @param value Value to set for the msdyn_TaxCode property.
     */
    public set msdyn_TaxCode(value: Msdyn_taxcode | undefined) {
        this._msdyn_TaxCode = value;
    };
    /**
     * Gets the msdyn_TransactionCategory property value. 
     * @returns a msdyn_transactioncategory
     */
    public get msdyn_TransactionCategory() {
        return this._msdyn_TransactionCategory;
    };
    /**
     * Sets the msdyn_TransactionCategory property value. 
     * @param value Value to set for the msdyn_TransactionCategory property.
     */
    public set msdyn_TransactionCategory(value: Msdyn_transactioncategory | undefined) {
        this._msdyn_TransactionCategory = value;
    };
    /**
     * Gets the msdyn_transactionclassification property value. 
     * @returns a integer
     */
    public get msdyn_transactionclassification() {
        return this._msdyn_transactionclassification;
    };
    /**
     * Sets the msdyn_transactionclassification property value. 
     * @param value Value to set for the msdyn_transactionclassification property.
     */
    public set msdyn_transactionclassification(value: number | undefined) {
        this._msdyn_transactionclassification = value;
    };
    /**
     * Gets the msdyn_transactiontypecode property value. 
     * @returns a integer
     */
    public get msdyn_transactiontypecode() {
        return this._msdyn_transactiontypecode;
    };
    /**
     * Sets the msdyn_transactiontypecode property value. 
     * @param value Value to set for the msdyn_transactiontypecode property.
     */
    public set msdyn_transactiontypecode(value: number | undefined) {
        this._msdyn_transactiontypecode = value;
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
     * Gets the msdyn_vendortype property value. 
     * @returns a integer
     */
    public get msdyn_vendortype() {
        return this._msdyn_vendortype;
    };
    /**
     * Sets the msdyn_vendortype property value. 
     * @param value Value to set for the msdyn_vendortype property.
     */
    public set msdyn_vendortype(value: number | undefined) {
        this._msdyn_vendortype = value;
    };
    /**
     * Gets the msdyn_Warehouse property value. 
     * @returns a msdyn_warehouse
     */
    public get msdyn_Warehouse() {
        return this._msdyn_Warehouse;
    };
    /**
     * Sets the msdyn_Warehouse property value. 
     * @param value Value to set for the msdyn_Warehouse property.
     */
    public set msdyn_Warehouse(value: Msdyn_warehouse | undefined) {
        this._msdyn_Warehouse = value;
    };
    /**
     * Gets the msdyn_worklocation property value. 
     * @returns a integer
     */
    public get msdyn_worklocation() {
        return this._msdyn_worklocation;
    };
    /**
     * Sets the msdyn_worklocation property value. 
     * @param value Value to set for the msdyn_worklocation property.
     */
    public set msdyn_worklocation(value: number | undefined) {
        this._msdyn_worklocation = value;
    };
    /**
     * Gets the msdyn_WorkOrder property value. 
     * @returns a msdyn_workorder
     */
    public get msdyn_WorkOrder() {
        return this._msdyn_WorkOrder;
    };
    /**
     * Sets the msdyn_WorkOrder property value. 
     * @param value Value to set for the msdyn_WorkOrder property.
     */
    public set msdyn_WorkOrder(value: Msdyn_workorder | undefined) {
        this._msdyn_WorkOrder = value;
    };
    /**
     * Gets the msdyn_WorkOrderType property value. 
     * @returns a msdyn_workordertype
     */
    public get msdyn_WorkOrderType() {
        return this._msdyn_WorkOrderType;
    };
    /**
     * Sets the msdyn_WorkOrderType property value. 
     * @param value Value to set for the msdyn_WorkOrderType property.
     */
    public set msdyn_WorkOrderType(value: Msdyn_workordertype | undefined) {
        this._msdyn_WorkOrderType = value;
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
     * Gets the ownerid property value. 
     * @returns a principal
     */
    public get ownerid() {
        return this._ownerid;
    };
    /**
     * Sets the ownerid property value. 
     * @param value Value to set for the ownerid property.
     */
    public set ownerid(value: Principal | undefined) {
        this._ownerid = value;
    };
    /**
     * Gets the owningbusinessunit property value. 
     * @returns a businessunit
     */
    public get owningbusinessunit() {
        return this._owningbusinessunit;
    };
    /**
     * Sets the owningbusinessunit property value. 
     * @param value Value to set for the owningbusinessunit property.
     */
    public set owningbusinessunit(value: Businessunit | undefined) {
        this._owningbusinessunit = value;
    };
    /**
     * Gets the owningteam property value. 
     * @returns a team
     */
    public get owningteam() {
        return this._owningteam;
    };
    /**
     * Sets the owningteam property value. 
     * @param value Value to set for the owningteam property.
     */
    public set owningteam(value: Team | undefined) {
        this._owningteam = value;
    };
    /**
     * Gets the owninguser property value. 
     * @returns a systemuser
     */
    public get owninguser() {
        return this._owninguser;
    };
    /**
     * Sets the owninguser property value. 
     * @param value Value to set for the owninguser property.
     */
    public set owninguser(value: Systemuser | undefined) {
        this._owninguser = value;
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
        writer.writeStringValue("_msdyn_accountcustomer_value", this._msdyn_accountcustomer_value);
        writer.writeStringValue("_msdyn_accountvendor_value", this._msdyn_accountvendor_value);
        writer.writeStringValue("_msdyn_agreement_value", this._msdyn_agreement_value);
        writer.writeStringValue("_msdyn_bookableresource_value", this._msdyn_bookableresource_value);
        writer.writeStringValue("_msdyn_contactcustomer_value", this._msdyn_contactcustomer_value);
        writer.writeStringValue("_msdyn_contactvendor_value", this._msdyn_contactvendor_value);
        writer.writeStringValue("_msdyn_contractorganizationalunitid_value", this._msdyn_contractorganizationalunitid_value);
        writer.writeStringValue("_msdyn_incidenttype_value", this._msdyn_incidenttype_value);
        writer.writeStringValue("_msdyn_invoice_value", this._msdyn_invoice_value);
        writer.writeStringValue("_msdyn_pricelist_value", this._msdyn_pricelist_value);
        writer.writeStringValue("_msdyn_product_value", this._msdyn_product_value);
        writer.writeStringValue("_msdyn_project_value", this._msdyn_project_value);
        writer.writeStringValue("_msdyn_resourcecategory_value", this._msdyn_resourcecategory_value);
        writer.writeStringValue("_msdyn_resourceorganizationalunitid_value", this._msdyn_resourceorganizationalunitid_value);
        writer.writeStringValue("_msdyn_salescontract_value", this._msdyn_salescontract_value);
        writer.writeStringValue("_msdyn_salescontractlineid_value", this._msdyn_salescontractlineid_value);
        writer.writeStringValue("_msdyn_serviceaccount_value", this._msdyn_serviceaccount_value);
        writer.writeStringValue("_msdyn_serviceterritory_value", this._msdyn_serviceterritory_value);
        writer.writeStringValue("_msdyn_task_value", this._msdyn_task_value);
        writer.writeStringValue("_msdyn_taxcode_value", this._msdyn_taxcode_value);
        writer.writeStringValue("_msdyn_transactioncategory_value", this._msdyn_transactioncategory_value);
        writer.writeStringValue("_msdyn_unit_value", this._msdyn_unit_value);
        writer.writeStringValue("_msdyn_unitschedule_value", this._msdyn_unitschedule_value);
        writer.writeStringValue("_msdyn_warehouse_value", this._msdyn_warehouse_value);
        writer.writeStringValue("_msdyn_workorder_value", this._msdyn_workorder_value);
        writer.writeStringValue("_msdyn_workordertype_value", this._msdyn_workordertype_value);
        writer.writeStringValue("_ownerid_value", this._ownerid_value);
        writer.writeStringValue("_owningbusinessunit_value", this._owningbusinessunit_value);
        writer.writeStringValue("_owningteam_value", this._owningteam_value);
        writer.writeStringValue("_owninguser_value", this._owninguser_value);
        writer.writeStringValue("_transactioncurrencyid_value", this._transactioncurrencyid_value);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeNumberValue("exchangerate", this.exchangerate);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeObjectValue<Account>("msdyn_AccountCustomer", this.msdyn_AccountCustomer);
        writer.writeDateValue("msdyn_accountingdate", this.msdyn_accountingdate);
        writer.writeObjectValue<Account>("msdyn_AccountVendor", this.msdyn_AccountVendor);
        writer.writeCollectionOfObjectValues<Annotation>("msdyn_actual_Annotations", this.msdyn_actual_Annotations);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_actual_AsyncOperations", this.msdyn_actual_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_actual_BulkDeleteFailures", this.msdyn_actual_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_actual_DuplicateBaseRecord", this.msdyn_actual_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_actual_DuplicateMatchingRecord", this.msdyn_actual_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_actual_MailboxTrackingFolders", this.msdyn_actual_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_actual_PrincipalObjectAttributeAccesses", this.msdyn_actual_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_actual_ProcessSession", this.msdyn_actual_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_actual_SyncErrors", this.msdyn_actual_SyncErrors);
        writer.writeStringValue("msdyn_actualid", this.msdyn_actualid);
        writer.writeNumberValue("msdyn_adjustmentstatus", this.msdyn_adjustmentstatus);
        writer.writeObjectValue<Msdyn_agreement>("msdyn_Agreement", this.msdyn_Agreement);
        writer.writeNumberValue("msdyn_amount", this.msdyn_amount);
        writer.writeNumberValue("msdyn_amount_base", this.msdyn_amount_base);
        writer.writeNumberValue("msdyn_amountmethod", this.msdyn_amountmethod);
        writer.writeNumberValue("msdyn_basisamount", this.msdyn_basisamount);
        writer.writeNumberValue("msdyn_basisamount_base", this.msdyn_basisamount_base);
        writer.writeNumberValue("msdyn_basisprice", this.msdyn_basisprice);
        writer.writeNumberValue("msdyn_basisprice_base", this.msdyn_basisprice_base);
        writer.writeNumberValue("msdyn_basisquantity", this.msdyn_basisquantity);
        writer.writeNumberValue("msdyn_billingstatus", this.msdyn_billingstatus);
        writer.writeNumberValue("msdyn_billingtype", this.msdyn_billingtype);
        writer.writeObjectValue<Bookableresource>("msdyn_bookableresource", this.msdyn_bookableresource);
        writer.writeObjectValue<Contact>("msdyn_ContactCustomer", this.msdyn_ContactCustomer);
        writer.writeObjectValue<Contact>("msdyn_ContactVendor", this.msdyn_ContactVendor);
        writer.writeObjectValue<Msdyn_organizationalunit>("msdyn_contractorganizationalunitid", this.msdyn_contractorganizationalunitid);
        writer.writeNumberValue("msdyn_customertype", this.msdyn_customertype);
        writer.writeStringValue("msdyn_description", this.msdyn_description);
        writer.writeDateValue("msdyn_documentdate", this.msdyn_documentdate);
        writer.writeDateValue("msdyn_enddatetime", this.msdyn_enddatetime);
        writer.writeDateValue("msdyn_exchangeratedate", this.msdyn_exchangeratedate);
        writer.writeStringValue("msdyn_externaldescription", this.msdyn_externaldescription);
        writer.writeDateValue("msdyn_externalreferencedate", this.msdyn_externalreferencedate);
        writer.writeStringValue("msdyn_externalreferenceid", this.msdyn_externalreferenceid);
        writer.writeObjectValue<Msdyn_incidenttype>("msdyn_IncidentType", this.msdyn_IncidentType);
        writer.writeObjectValue<Invoice>("msdyn_Invoice", this.msdyn_Invoice);
        writer.writeBooleanValue("msdyn_isjournalized", this.msdyn_isjournalized);
        writer.writeNumberValue("msdyn_journaltype", this.msdyn_journaltype);
        writer.writeNumberValue("msdyn_percent", this.msdyn_percent);
        writer.writeNumberValue("msdyn_price", this.msdyn_price);
        writer.writeNumberValue("msdyn_price_base", this.msdyn_price_base);
        writer.writeObjectValue<Pricelevel>("msdyn_PriceList", this.msdyn_PriceList);
        writer.writeObjectValue<Product>("msdyn_Product", this.msdyn_Product);
        writer.writeNumberValue("msdyn_producttype", this.msdyn_producttype);
        writer.writeObjectValue<Msdyn_project>("msdyn_Project", this.msdyn_Project);
        writer.writeNumberValue("msdyn_quantity", this.msdyn_quantity);
        writer.writeObjectValue<Bookableresourcecategory>("msdyn_ResourceCategory", this.msdyn_ResourceCategory);
        writer.writeObjectValue<Msdyn_organizationalunit>("msdyn_ResourceOrganizationalUnitId", this.msdyn_ResourceOrganizationalUnitId);
        writer.writeObjectValue<Salesorder>("msdyn_SalesContract", this.msdyn_SalesContract);
        writer.writeStringValue("msdyn_salescontractline", this.msdyn_salescontractline);
        writer.writeObjectValue<Salesorderdetail>("msdyn_SalesContractLineId", this.msdyn_SalesContractLineId);
        writer.writeObjectValue<Account>("msdyn_ServiceAccount", this.msdyn_ServiceAccount);
        writer.writeObjectValue<Territory>("msdyn_ServiceTerritory", this.msdyn_ServiceTerritory);
        writer.writeDateValue("msdyn_startdatetime", this.msdyn_startdatetime);
        writer.writeObjectValue<Msdyn_projecttask>("msdyn_Task", this.msdyn_Task);
        writer.writeObjectValue<Msdyn_taxcode>("msdyn_TaxCode", this.msdyn_TaxCode);
        writer.writeObjectValue<Msdyn_transactioncategory>("msdyn_TransactionCategory", this.msdyn_TransactionCategory);
        writer.writeNumberValue("msdyn_transactionclassification", this.msdyn_transactionclassification);
        writer.writeNumberValue("msdyn_transactiontypecode", this.msdyn_transactiontypecode);
        writer.writeObjectValue<Uom>("msdyn_Unit", this.msdyn_Unit);
        writer.writeObjectValue<Uomschedule>("msdyn_UnitSchedule", this.msdyn_UnitSchedule);
        writer.writeNumberValue("msdyn_vendortype", this.msdyn_vendortype);
        writer.writeObjectValue<Msdyn_warehouse>("msdyn_Warehouse", this.msdyn_Warehouse);
        writer.writeNumberValue("msdyn_worklocation", this.msdyn_worklocation);
        writer.writeObjectValue<Msdyn_workorder>("msdyn_WorkOrder", this.msdyn_WorkOrder);
        writer.writeObjectValue<Msdyn_workordertype>("msdyn_WorkOrderType", this.msdyn_WorkOrderType);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeObjectValue<Principal>("ownerid", this.ownerid);
        writer.writeObjectValue<Businessunit>("owningbusinessunit", this.owningbusinessunit);
        writer.writeObjectValue<Team>("owningteam", this.owningteam);
        writer.writeObjectValue<Systemuser>("owninguser", this.owninguser);
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
